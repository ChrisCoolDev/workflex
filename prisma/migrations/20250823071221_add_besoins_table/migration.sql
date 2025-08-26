-- CreateTable
CREATE TABLE "public"."candidatures" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT,
    "dateNaissance" TEXT NOT NULL,
    "sexe" TEXT NOT NULL,
    "ville" TEXT NOT NULL,
    "arrondissement" TEXT NOT NULL,
    "quartier" TEXT NOT NULL,
    "statut" TEXT NOT NULL,
    "permisConduire" TEXT NOT NULL,
    "cvUrl" TEXT,
    "cvFilename" TEXT,
    "commentaire" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "candidatures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."besoins" (
    "id" TEXT NOT NULL,
    "entreprise_nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT,
    "profil_recherche" TEXT NOT NULL,
    "poste_vaccant" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duree" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "besoins_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "candidatures_email_key" ON "public"."candidatures"("email");

-- CreateIndex
CREATE UNIQUE INDEX "besoins_email_key" ON "public"."besoins"("email");
