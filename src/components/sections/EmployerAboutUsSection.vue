<script setup>
import SectionWrapper from '../basis/SectionWrapper.vue'
</script>
<template>
  <SectionWrapper>
    <section class="py-[80px] max-sm:py-[40px]">
      <div class="flex justify-between w-full mb-[40px] max-sm:flex-col max-sm:space-y-12">
        <div class="max-w-[560px] w-full">
          <h3 class="text-secondary text-xs font-semibold leading-tigh mb-3">Qui sommes-nous?</h3>
          <h2 class="font-semibold text-xxl leading-[44px] text-primary mb-5">
            Agence d&apos;intérim spécialisée dans les missions flexibles
          </h2>
          <p class="text-xs leading-tigh text-greyScale300">
            Pénurie des compétences, bouleversement des codes du travail et des organisations… Pas
            simple dans ce contexte, de satisfaire pleinement votre clientèle et d’assurer vos
            productions ! Et si l’intérim était LA solution ? Vous en doutez ? Oubliez vos aprioris.
            Chez WorkFlex nous vous promettons un modèle d’intérim différent, capable de comprendre
            et de s’adapter à vos besoins, d’alléger vos processus de recrutement tout en vous
            proposant les meilleurs profils et tout ça en 24/7, 365j par an !
          </p>
        </div>
        <div class="max-w-[624px] w-full">
          <div class="flex items-start space-x-4 mb-[48px]">
            <div class="flex items-center justify-center bg-secondaryScale10 rounded-[4px] p-3">
              <svg
                class="message-chat-circle"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.09436 11.2288C6.03221 10.8282 5.99996 10.4179 5.99996 10C5.99996 5.58172 9.60525 2 14.0526 2C18.4999 2 22.1052 5.58172 22.1052 10C22.1052 10.9981 21.9213 11.9535 21.5852 12.8345C21.5154 13.0175 21.4804 13.109 21.4646 13.1804C21.4489 13.2512 21.4428 13.301 21.4411 13.3735C21.4394 13.4466 21.4493 13.5272 21.4692 13.6883L21.8717 16.9585C21.9153 17.3125 21.9371 17.4895 21.8782 17.6182C21.8266 17.731 21.735 17.8205 21.6211 17.8695C21.4911 17.9254 21.3146 17.8995 20.9617 17.8478L17.7765 17.3809C17.6101 17.3565 17.527 17.3443 17.4512 17.3448C17.3763 17.3452 17.3245 17.3507 17.2511 17.3661C17.177 17.3817 17.0823 17.4172 16.893 17.4881C16.0097 17.819 15.0524 18 14.0526 18C13.6344 18 13.2237 17.9683 12.8227 17.9073M7.63158 22C10.5965 22 13 19.5376 13 16.5C13 13.4624 10.5965 11 7.63158 11C4.66668 11 2.26316 13.4624 2.26316 16.5C2.26316 17.1106 2.36028 17.6979 2.53955 18.2467C2.61533 18.4787 2.65322 18.5947 2.66566 18.6739C2.67864 18.7567 2.68091 18.8031 2.67608 18.8867C2.67145 18.9668 2.65141 19.0573 2.61134 19.2383L2 22L4.9948 21.591C5.15827 21.5687 5.24 21.5575 5.31137 21.558C5.38652 21.5585 5.42641 21.5626 5.50011 21.5773C5.5701 21.5912 5.67416 21.6279 5.88227 21.7014C6.43059 21.8949 7.01911 22 7.63158 22Z"
                  stroke="#F77F00"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-semibold leading-tighest text-primary mb-2">
                Des candidats sélectionnés selon vos critères
              </h4>
              <p class="text-xs text-greyScale300 leading-tigh">
                Trouvez immédiatement les profils qui correspondent à vos exigences : nos recruteurs
                filtrent compétences, disponibilités et valeurs pour vous présenter la bonne
                personne, au bon moment. Contactez-nous dès aujourd’hui et gagnez du temps sur
                chaque embauche.
              </p>
            </div>
          </div>
          <div class="flex items-start space-x-4">
            <div class="flex items-center justify-center bg-secondaryScale10 rounded-[4px] p-3">
              <svg
                class="zap"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z"
                  stroke="#F77F00"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-semibold leading-tighest text-primary mb-2">
                Des shifts adaptés à votre activité et vos horaires
              </h4>
              <p class="text-xs text-greyScale300 leading-tigh">
                Ajustez vos effectifs à la minute près : nous créons des plannings sur mesure,
                alignés sur vos pics de production et vos contraintes d’exploitation. Planifiez
                votre prochain shift avec WorkFlex et retrouvez la sérénité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </SectionWrapper>
</template>
