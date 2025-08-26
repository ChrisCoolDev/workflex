<script setup>
import SectionWrapper from '../basis/SectionWrapper.vue'
</script>
<template>
  <SectionWrapper>
    <div class="mb-[90px]">
      <div class="flex justify-center mb-[40px]">
        <h2
          class="font-semibold text-xxl leading-[44px] text-primary mb-5 text-center max-w-[560px]"
        >
          Un besoin de recrutement ? Nous avons forcément la solution !
        </h2>
      </div>

      <div id="problemetique" class="grid gap-8 mt-8 md:grid-cols-3 md:gap-12 md:flex-row">
        <div class="pt-6 border-t border-l-oslo-grey space-y-3">
          <div class="flex items-start justify-between">
            <h3 class="text-balance font-semibold text-sm text-primary">
              Mon entreprise connaît un pic d’activité
            </h3>
            <svg
              class="w-6 duration-200 ease-in-out stroke-primary hover:stroke-primary-700 md:hidden"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="33"
                height="33"
                rx="16.5"
                stroke="#FE6000"
                stroke-miterlimit="0"
                stroke-linejoin="bevel"
              ></rect>
              <path
                d="M23.6921 14.9422L17.4421 21.1922C17.3841 21.2503 17.3151 21.2964 17.2393 21.3278C17.1634 21.3593 17.0821 21.3755 16.9999 21.3755C16.9178 21.3755 16.8365 21.3593 16.7606 21.3278C16.6847 21.2964 16.6158 21.2503 16.5577 21.1922L10.3077 14.9422C10.1905 14.8249 10.1246 14.6658 10.1246 14.5C10.1246 14.3341 10.1905 14.1751 10.3077 14.0578C10.425 13.9405 10.5841 13.8746 10.7499 13.8746C10.9158 13.8746 11.0748 13.9405 11.1921 14.0578L16.9999 19.8664L22.8077 14.0578C22.8658 13.9997 22.9347 13.9537 23.0106 13.9222C23.0865 13.8908 23.1678 13.8746 23.2499 13.8746C23.332 13.8746 23.4134 13.8908 23.4892 13.9222C23.5651 13.9537 23.634 13.9997 23.6921 14.0578C23.7502 14.1159 23.7962 14.1848 23.8277 14.2607C23.8591 14.3365 23.8753 14.4179 23.8753 14.5C23.8753 14.5821 23.8591 14.6634 23.8277 14.7393C23.7962 14.8152 23.7502 14.8841 23.6921 14.9422Z"
                fill=""
              ></path>
            </svg>
          </div>
          <p class="line-clamp-2 md:line-clamp-none text-xs text-greyScale300 text-xs">
            Besoin de renfort pour répondre à l’augmentation subite de vos commandes ? Nous
            mobilisons des intérimaires qualifiés pour vous aider à relever ce défi.
          </p>
        </div>
        <div class="pt-6 border-t border-l-oslo-grey space-y-3">
          <div class="flex items-start justify-between">
            <h3 class="text-balance font-semibold text-sm text-primary">
              Je dois remplacer un ou plusieurs salariés absents
            </h3>
            <span
              ><svg
                class="w-6 duration-200 ease-in-out stroke-primary hover:stroke-primary-700 md:hidden"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="33"
                  height="33"
                  rx="16.5"
                  stroke="#FE6000"
                  stroke-miterlimit="0"
                  stroke-linejoin="bevel"
                ></rect>
                <path
                  d="M23.6921 14.9422L17.4421 21.1922C17.3841 21.2503 17.3151 21.2964 17.2393 21.3278C17.1634 21.3593 17.0821 21.3755 16.9999 21.3755C16.9178 21.3755 16.8365 21.3593 16.7606 21.3278C16.6847 21.2964 16.6158 21.2503 16.5577 21.1922L10.3077 14.9422C10.1905 14.8249 10.1246 14.6658 10.1246 14.5C10.1246 14.3341 10.1905 14.1751 10.3077 14.0578C10.425 13.9405 10.5841 13.8746 10.7499 13.8746C10.9158 13.8746 11.0748 13.9405 11.1921 14.0578L16.9999 19.8664L22.8077 14.0578C22.8658 13.9997 22.9347 13.9537 23.0106 13.9222C23.0865 13.8908 23.1678 13.8746 23.2499 13.8746C23.332 13.8746 23.4134 13.8908 23.4892 13.9222C23.5651 13.9537 23.634 13.9997 23.6921 14.0578C23.7502 14.1159 23.7962 14.1848 23.8277 14.2607C23.8591 14.3365 23.8753 14.4179 23.8753 14.5C23.8753 14.5821 23.8591 14.6634 23.8277 14.7393C23.7962 14.8152 23.7502 14.8841 23.6921 14.9422Z"
                  fill=""
                ></path></svg
            ></span>
          </div>
          <p class="line-clamp-2 md:line-clamp-none text-greyScale300 text-xs">
            Formation, congés maternité ou maladie, … que les absences de vos collaborateurs soient
            programmées ou inopinées, nos intérimaires sont toujours dans les starting-blocks pour
            les remplacer.
          </p>
        </div>

        <div class="pt-6 border-t border-l-oslo-grey space-y-3">
          <div class="flex items-start justify-between">
            <h3 class="text-balance font-semibold text-sm text-primary">
              Je dois gérer les fluctuations saisonnières de mon activité
            </h3>
            <span
              ><svg
                class="w-6 duration-200 ease-in-out stroke-primary hover:stroke-primary-700 md:hidden"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="33"
                  height="33"
                  rx="16.5"
                  stroke="#FE6000"
                  stroke-miterlimit="0"
                  stroke-linejoin="bevel"
                ></rect>
                <path
                  d="M23.6921 14.9422L17.4421 21.1922C17.3841 21.2503 17.3151 21.2964 17.2393 21.3278C17.1634 21.3593 17.0821 21.3755 16.9999 21.3755C16.9178 21.3755 16.8365 21.3593 16.7606 21.3278C16.6847 21.2964 16.6158 21.2503 16.5577 21.1922L10.3077 14.9422C10.1905 14.8249 10.1246 14.6658 10.1246 14.5C10.1246 14.3341 10.1905 14.1751 10.3077 14.0578C10.425 13.9405 10.5841 13.8746 10.7499 13.8746C10.9158 13.8746 11.0748 13.9405 11.1921 14.0578L16.9999 19.8664L22.8077 14.0578C22.8658 13.9997 22.9347 13.9537 23.0106 13.9222C23.0865 13.8908 23.1678 13.8746 23.2499 13.8746C23.332 13.8746 23.4134 13.8908 23.4892 13.9222C23.5651 13.9537 23.634 13.9997 23.6921 14.0578C23.7502 14.1159 23.7962 14.1848 23.8277 14.2607C23.8591 14.3365 23.8753 14.4179 23.8753 14.5C23.8753 14.5821 23.8591 14.6634 23.8277 14.7393C23.7962 14.8152 23.7502 14.8841 23.6921 14.9422Z"
                  fill=""
                ></path></svg
            ></span>
          </div>
          <p class="line-clamp-2 md:line-clamp-none text-greyScale300 text-xs">
            Avec l’intérim, inutile de maintenir une main-d’œuvre constante toute l’année pour
            compter sur l’appui d’un personnel qualifié au plus fort de votre activité.
          </p>
        </div>

        <div class="pt-6 border-t border-l-oslo-grey space-y-3">
          <div class="flex items-start justify-between">
            <h3 class="text-balance font-semibold text-sm text-primary">
              Je prévois un recrutement volumique
            </h3>
            <span
              ><svg
                class="w-6 duration-200 ease-in-out stroke-primary hover:stroke-primary-700 md:hidden"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="33"
                  height="33"
                  rx="16.5"
                  stroke="#FE6000"
                  stroke-miterlimit="0"
                  stroke-linejoin="bevel"
                ></rect>
                <path
                  d="M23.6921 14.9422L17.4421 21.1922C17.3841 21.2503 17.3151 21.2964 17.2393 21.3278C17.1634 21.3593 17.0821 21.3755 16.9999 21.3755C16.9178 21.3755 16.8365 21.3593 16.7606 21.3278C16.6847 21.2964 16.6158 21.2503 16.5577 21.1922L10.3077 14.9422C10.1905 14.8249 10.1246 14.6658 10.1246 14.5C10.1246 14.3341 10.1905 14.1751 10.3077 14.0578C10.425 13.9405 10.5841 13.8746 10.7499 13.8746C10.9158 13.8746 11.0748 13.9405 11.1921 14.0578L16.9999 19.8664L22.8077 14.0578C22.8658 13.9997 22.9347 13.9537 23.0106 13.9222C23.0865 13.8908 23.1678 13.8746 23.2499 13.8746C23.332 13.8746 23.4134 13.8908 23.4892 13.9222C23.5651 13.9537 23.634 13.9997 23.6921 14.0578C23.7502 14.1159 23.7962 14.1848 23.8277 14.2607C23.8591 14.3365 23.8753 14.4179 23.8753 14.5C23.8753 14.5821 23.8591 14.6634 23.8277 14.7393C23.7962 14.8152 23.7502 14.8841 23.6921 14.9422Z"
                  fill=""
                ></path></svg
            ></span>
          </div>
          <p class="line-clamp-2 md:line-clamp-none text-greyScale300 text-xs">
            Vous devez recruter un grand nombre de collaborateurs mais le temps presse et les
            candidatures sont rares ? Nous vous proposons une offre de recrutement volumique
            sur-mesure.
          </p>
        </div>

        <div class="pt-6 border-t border-l-oslo-grey space-y-3">
          <div class="flex items-start justify-between">
            <h3 class="text-balance font-semibold text-sm text-primary">
              Je souhaite déléguer la gestion de mes RH
            </h3>
            <span
              ><svg
                class="w-6 duration-200 ease-in-out stroke-primary hover:stroke-primary-700 md:hidden"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="33"
                  height="33"
                  rx="16.5"
                  stroke="#FE6000"
                  stroke-miterlimit="0"
                  stroke-linejoin="bevel"
                ></rect>
                <path
                  d="M23.6921 14.9422L17.4421 21.1922C17.3841 21.2503 17.3151 21.2964 17.2393 21.3278C17.1634 21.3593 17.0821 21.3755 16.9999 21.3755C16.9178 21.3755 16.8365 21.3593 16.7606 21.3278C16.6847 21.2964 16.6158 21.2503 16.5577 21.1922L10.3077 14.9422C10.1905 14.8249 10.1246 14.6658 10.1246 14.5C10.1246 14.3341 10.1905 14.1751 10.3077 14.0578C10.425 13.9405 10.5841 13.8746 10.7499 13.8746C10.9158 13.8746 11.0748 13.9405 11.1921 14.0578L16.9999 19.8664L22.8077 14.0578C22.8658 13.9997 22.9347 13.9537 23.0106 13.9222C23.0865 13.8908 23.1678 13.8746 23.2499 13.8746C23.332 13.8746 23.4134 13.8908 23.4892 13.9222C23.5651 13.9537 23.634 13.9997 23.6921 14.0578C23.7502 14.1159 23.7962 14.1848 23.8277 14.2607C23.8591 14.3365 23.8753 14.4179 23.8753 14.5C23.8753 14.5821 23.8591 14.6634 23.8277 14.7393C23.7962 14.8152 23.7502 14.8841 23.6921 14.9422Z"
                  fill=""
                ></path></svg
            ></span>
          </div>
          <p class="line-clamp-2 md:line-clamp-none text-greyScale300 text-xs">
            Vous trouvez les process de recrutement complexes et chronophages ? Confiez-les nous !
            Nous pouvons aussi épauler votre service RH ou même le remplacer sur toutes les tâches
            administratives.
          </p>
        </div>
        <div class="pt-6 border-t border-l-oslo-grey space-y-3">
          <div class="flex items-start justify-between">
            <h3 class="text-balance font-semibold text-sm text-primary">
              Personne ne sait gérer l’intérim sur mon site
            </h3>
            <span
              ><svg
                class="w-6 duration-200 ease-in-out stroke-primary hover:stroke-primary-700 md:hidden"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="33"
                  height="33"
                  rx="16.5"
                  stroke="#FE6000"
                  stroke-miterlimit="0"
                  stroke-linejoin="bevel"
                ></rect>
                <path
                  d="M23.6921 14.9422L17.4421 21.1922C17.3841 21.2503 17.3151 21.2964 17.2393 21.3278C17.1634 21.3593 17.0821 21.3755 16.9999 21.3755C16.9178 21.3755 16.8365 21.3593 16.7606 21.3278C16.6847 21.2964 16.6158 21.2503 16.5577 21.1922L10.3077 14.9422C10.1905 14.8249 10.1246 14.6658 10.1246 14.5C10.1246 14.3341 10.1905 14.1751 10.3077 14.0578C10.425 13.9405 10.5841 13.8746 10.7499 13.8746C10.9158 13.8746 11.0748 13.9405 11.1921 14.0578L16.9999 19.8664L22.8077 14.0578C22.8658 13.9997 22.9347 13.9537 23.0106 13.9222C23.0865 13.8908 23.1678 13.8746 23.2499 13.8746C23.332 13.8746 23.4134 13.8908 23.4892 13.9222C23.5651 13.9537 23.634 13.9997 23.6921 14.0578C23.7502 14.1159 23.7962 14.1848 23.8277 14.2607C23.8591 14.3365 23.8753 14.4179 23.8753 14.5C23.8753 14.5821 23.8591 14.6634 23.8277 14.7393C23.7962 14.8152 23.7502 14.8841 23.6921 14.9422Z"
                  fill=""
                ></path></svg
            ></span>
          </div>
          <p class="line-clamp-2 md:line-clamp-none text-greyScale300 text-xs">
            Votre entreprise s'engage à respecter le quota de travailleurs handicapés exigé par la
            loi ? Nous comprenons les défis que cela peut représenter, et c'est pourquoi nous sommes
            là pour vous aider.
          </p>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
