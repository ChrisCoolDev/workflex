<script setup>
import { useNavigationStore } from '@/stores/navigationStore'
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const navigation = useNavigationStore()
const route = useRoute()

// Synchroniser l'état interne si on navigue par une autre action
watch(
  () => route.name,
  (newName) => {
    navigation.currentPage = newName
  },
)

const isEmployeurPage = computed(
  () => navigation.currentPage === 'employer' || navigation.currentPage === 'postJob',
)

const onToggle = () => {
  navigation.togglePage()
}
</script>
<template>
  <nav class="bg-white px-4 py-[34px] max-sm:py-5 font-inter shadow-sm">
    <div class="wrapper flex items-center justify-between max-w-[1280px] w-full mx-auto">
      <div>
        <svg
          class="vector"
          width="121"
          height="14"
          viewBox="0 0 121 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.2 13L46.16 2.44H49.088L50.88 10.776L52.768 2.44H55.264L57.2 10.76L58.96 2.44H61.792L58.736 13H55.744L54.496 7.88L54.016 5.304H53.984L53.52 7.88L52.288 13H49.2Z"
            fill="#0B2E4C"
          />
          <path
            d="M65.8777 4.84C66.7204 4.84 67.4564 5.00533 68.0857 5.336C68.7257 5.656 69.2218 6.13067 69.5738 6.76C69.9364 7.37867 70.1178 8.12533 70.1178 9C70.1178 9.87467 69.9364 10.6267 69.5738 11.256C69.2218 11.8747 68.7257 12.3493 68.0857 12.68C67.4564 13 66.7204 13.16 65.8777 13.16C65.0564 13.16 64.3258 13 63.6857 12.68C63.0457 12.3493 62.5444 11.8747 62.1818 11.256C61.8298 10.6267 61.6538 9.87467 61.6538 9C61.6538 8.12533 61.8298 7.37867 62.1818 6.76C62.5444 6.13067 63.0457 5.656 63.6857 5.336C64.3258 5.00533 65.0564 4.84 65.8777 4.84ZM65.8777 6.776C65.5684 6.776 65.3018 6.85067 65.0778 7C64.8538 7.14933 64.6831 7.38933 64.5658 7.72C64.4484 8.05067 64.3897 8.47733 64.3897 9C64.3897 9.52267 64.4484 9.94933 64.5658 10.28C64.6831 10.6 64.8538 10.84 65.0778 11C65.3018 11.1493 65.5684 11.224 65.8777 11.224C66.1977 11.224 66.4697 11.1493 66.6937 11C66.9177 10.84 67.0884 10.6 67.2057 10.28C67.3231 9.94933 67.3818 9.52267 67.3818 9C67.3818 8.47733 67.3231 8.05067 67.2057 7.72C67.0884 7.38933 66.9177 7.14933 66.6937 7C66.4697 6.85067 66.1977 6.776 65.8777 6.776Z"
            fill="#0B2E4C"
          />
          <path
            d="M71.6479 13V5H74.0479L74.1599 6.728C74.3625 6.13067 74.6612 5.66667 75.0559 5.336C75.4612 5.00533 75.9732 4.84 76.5919 4.84C76.7945 4.84 76.9652 4.856 77.1039 4.888C77.2532 4.92 77.3705 4.96267 77.4559 5.016L77.1839 7.256C77.0772 7.21333 76.9385 7.18133 76.7679 7.16C76.6079 7.128 76.4105 7.112 76.1759 7.112C75.8559 7.112 75.5572 7.18133 75.2799 7.32C75.0025 7.45867 74.7785 7.66667 74.6079 7.944C74.4479 8.21067 74.3679 8.552 74.3679 8.968V13H71.6479Z"
            fill="#0B2E4C"
          />
          <path
            d="M87.3069 5L83.4669 9.096L82.9549 9.24L80.6669 11.8L80.6509 9.016L84.2829 5H87.3069ZM81.2429 1.608V13H78.5229V1.608H81.2429ZM83.8829 7.4L87.4829 13H84.4749L82.1069 9L83.8829 7.4Z"
            fill="#0B2E4C"
          />
          <path
            d="M96.876 4.568H91.42V6.808H95.772V8.936H91.42V13H88.668V2.44H96.876V4.568Z"
            fill="#F77F00"
          />
          <path
            d="M100.961 1.608V10.28C100.961 10.632 101.02 10.8827 101.137 11.032C101.254 11.1813 101.452 11.256 101.729 11.256C101.889 11.256 102.022 11.2453 102.129 11.224C102.236 11.2027 102.364 11.1707 102.513 11.128L102.337 12.76C102.145 12.8773 101.894 12.9733 101.585 13.048C101.276 13.1227 100.972 13.16 100.673 13.16C99.8195 13.16 99.2009 12.9627 98.8169 12.568C98.4329 12.1733 98.2409 11.528 98.2409 10.632V1.608H100.961Z"
            fill="#F77F00"
          />
          <path
            d="M107.411 13.16C106.526 13.16 105.758 12.9947 105.107 12.664C104.467 12.3333 103.971 11.8587 103.619 11.24C103.267 10.6213 103.091 9.87467 103.091 9C103.091 8.12533 103.267 7.37867 103.619 6.76C103.971 6.14133 104.462 5.66667 105.091 5.336C105.731 5.00533 106.462 4.84 107.283 4.84C108.126 4.84 108.841 5.00533 109.427 5.336C110.025 5.656 110.478 6.104 110.787 6.68C111.097 7.24533 111.251 7.896 111.251 8.632C111.251 8.824 111.246 9.016 111.235 9.208C111.225 9.4 111.209 9.56 111.187 9.688H104.851V8.232H109.987L108.691 8.728C108.691 8.088 108.574 7.59733 108.339 7.256C108.115 6.91467 107.763 6.744 107.283 6.744C106.942 6.744 106.649 6.824 106.403 6.984C106.169 7.144 105.987 7.39467 105.859 7.736C105.742 8.07733 105.683 8.51467 105.683 9.048C105.683 9.57067 105.753 9.99733 105.891 10.328C106.03 10.648 106.227 10.8827 106.483 11.032C106.739 11.1707 107.049 11.24 107.411 11.24C107.817 11.24 108.137 11.16 108.371 11C108.617 10.84 108.798 10.616 108.915 10.328L111.091 11.048C110.942 11.5067 110.681 11.896 110.307 12.216C109.945 12.5253 109.507 12.76 108.995 12.92C108.494 13.08 107.966 13.16 107.411 13.16Z"
            fill="#F77F00"
          />
          <path
            d="M114.719 5L116.671 8.6L117.567 8.52L120.719 13H117.599L115.583 9.352H114.639L111.583 5H114.719ZM120.655 5L117.631 9.32L116.623 9.256L114.527 13H111.471L114.687 8.488L115.615 8.616L117.599 5H120.655Z"
            fill="#F77F00"
          />
          <path d="M0 0H29V14H0V0Z" fill="#0B2E4C" />
          <path d="M31 0H42V14H31V0Z" fill="#F77F00" />
        </svg>
      </div>
      <ul class="flex items-center space-x-[48px] max-sm:hidden">
        <li>
          <a href="" class="text-secondary font-semibold text-xs">Acceuil</a>
        </li>
        <li>
          <a href="" class="text-xs text-greyScale300">A propos de nous</a>
        </li>
        <li>
          <a href="" class="text-xs text-greyScale300">Comment ca marche</a>
        </li>
        <li>
          <a href="" class="text-xs text-greyScale300">Pourquoi nous choisir</a>
        </li>
      </ul>
      <div class="flex justify-center text-xs md:justify-start md:col-span-1">
        <label
          for="TogglePro"
          class="inline-flex items-center space-x-4 max-sm:space-x-2 cursor-pointer max-sm:text-[13px]"
        >
          <span>Candidats</span>
          <span class="relative">
            <input
              id="TogglePro"
              type="checkbox"
              class="hidden peer"
              :checked="isEmployeurPage"
              @change="onToggle"
            />

            <div
              class="w-10 h-6 rounded-full shadow-inner max-sm:w-8 max-sm:h-[20px] bg-secondary"
            ></div>
            <svg
              class="absolute inset-y-0 left-0 w-4 h-4 m-1 max-sm:w-3 max-sm:h-3 bg-white rounded-full shadow peer-checked:right-0 peer-checked:left-auto"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="8" fill="white"></circle>
              <path d="M7 5L8 2L9 5H7Z" fill="#FE6000"></path>
            </svg>
          </span>
          <span>Entreprise</span>
        </label>
      </div>
    </div>
  </nav>
</template>
