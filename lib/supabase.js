// lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Fonction pour uploader un CV
export const uploadCV = async (file, candidatureId) => {
  try {
    // Validation du fichier
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (file.size > maxSize) {
      throw new Error('Le fichier est trop volumineux (max 10MB)')
    }

    // Types de fichiers acceptés
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]

    if (!allowedTypes.includes(file.type)) {
      throw new Error('Type de fichier non supporté. Utilisez PDF, DOC ou DOCX')
    }

    // Créer un nom de fichier unique
    const fileExt = file.name.split('.').pop()
    const fileName = `cv-${candidatureId}-${Date.now()}.${fileExt}`
    const filePath = `cvs/${fileName}`

    // Upload vers Supabase Storage
    const { data, error } = await supabase.storage.from('cv-uploads').upload(filePath, file, {
      cacheControl: '3600',
      upsert: true, // Ne pas écraser si le fichier existe
    })

    if (error) {
      throw error
    }

    return {
      path: data.path,
      fileName: fileName,
      originalName: file.name,
      size: file.size,
    }
  } catch (error) {
    console.error('Erreur upload CV:', error)
    throw error
  }
}

// Fonction pour récupérer l'URL publique d'un CV
export const getCVUrl = async (path) => {
  try {
    const { data } = supabase.storage.from('cv-uploads').getPublicUrl(path)

    return data.publicUrl
  } catch (error) {
    console.error('Erreur récupération URL CV:', error)
    throw error
  }
}

// Fonction pour supprimer un CV
export const deleteCV = async (path) => {
  try {
    const { error } = await supabase.storage.from('cv-uploads').remove([path])

    if (error) {
      throw error
    }

    return { success: true }
  } catch (error) {
    console.error('Erreur suppression CV:', error)
    throw error
  }
}
