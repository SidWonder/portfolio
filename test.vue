<template id="productList">
  <div class="digi-products" v-loading="isLoading">
    <h2 v-if="firstAltIndex === 0" class="digi-products__alternative-headline">По запросу {{ term }} ничего не найдено.
      Посмотрите похожие товары.</h2>

    <div class="digi-products-grid digi-products-grid_horde">
      <div v-for="(product, key) in products.slice(0, firstAltIndex || products.length)" class="digi-product" :class="[{ 'digi-product__oos': !product.available }]" :key="key" @click="handleClick(product.id)">
        <a :href="product.link_url" class="digi-product__image-wrapper" target="_blank">
          <img :src="product.image_url || `//cdn.diginetica.net/images/noimage.png`" alt="" class="digi-product__image" onerror="this.src='//cdn.diginetica.net/images/noimage.png';">
          <div v-if="product.attributes['оценка'] && product.attributes['оценка'][0]" class="digi-product__rating digi-product-rating">
                  <span :class="'digi-product-rating__visual digi-product-rating__visual--'+Math.round(product.attributes['оценка'][0])"></span>
           </div>
           <ul class="digi-product__badge__list">
            <li v-if="product.attributes['акция'] && product.attributes['акция'][0]" class="digi-product__badge">Акция</li>
           <li v-if="product.attributes['хит продаж'] && product.attributes['хит продаж'][0]" class="digi-product__badge">Хит продаж</li>
           <li v-if="product.attributes['новинка'] && product.attributes['новинка'][0]" class="digi-product__badge">Новинка</li>
           <li v-if="product.attributes['лидер продаж'] && product.attributes['лидер продаж'][0]" class="digi-product__badge">Лидер продаж</li>
           <li v-if="product.attributes['лучшее предложение'] && product.attributes['лучшее предложение'][0]" class="digi-product__badge">Лучшее предложение</li>
           </ul>
        </a>
        <div class="digi-product-favorite" :data-id="product.id" onclick="window.digiCustom.addToFav(this)">
           <div class="digi-product-favorite-heart digi-product-favorite-heart--1"></div>
           <div class="digi-product-favorite-heart digi-product-favorite-heart--2"></div>
           <div class="digi-product-favorite-heart digi-product-favorite-heart--3"></div>
           <div class="digi-product-favorite-heart digi-product-favorite-heart--4"></div>
           <div class="digi-product-favorite-heart digi-product-favorite-heart--5"></div>
           <div class="digi-product-favorite-heart digi-product-favorite-heart--6"></div>
           <div class="digi-product-favorite-heart digi-product-favorite-heart--7"></div>
        </div>

        <div class="digi-product__main" :class="{ 'digi-product__main_thin': isMobile }">
          <div class="digi-product__meta">

            <div class="digi-product__label">
              <a :href="product.link_url" target="_blank">{{ product.name }}</a>
            </div>
            <div class="digi-product__oos-label" v-if="!product.available">Прием заказов окончен</div>
          </div>

          <div class="digi-product__price">
            <div class="digi-product__price-container" v-if="+product.price">
            <span class="digi-product-price-variant digi-product-price-variant_actual"><span v-if="!product.available" class="digi-product__oos-price-label">Последняя цена </span>{{ product.price | thousandSeparator }}
              <span class="digi-product-price-variant__currency">
                  <svg v-if="product.available" width="16" height="19" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <use xlink:href="#ruble-sign"></use>
                </svg>
                <svg v-if="!product.available" width="12" height="12" viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg">
                  <use xlink:href="#ruble-small"></use>
                </svg>
                </span></span>

            <span class="digi-product-price-variant digi-product-price-variant_old" v-if="product.oldPrice"><s>{{ product.oldPrice | thousandSeparator }}
                <span class="digi-product-price-variant__currency">
                    <span class="digi-product-price-variant__currency">
                        <svg width="7" height="9" viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg">
                  <use xlink:href="#ruble-grey"></use>
                </svg>
                </span></span></s></span>
            </div>
        <a class="digi-product-cart-icon" :href="product.link_url" target="_blank">
          <svg width="18" height="18" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M13 0.5C14.9891 0.5 16.8968 1.29018 18.3033 2.6967C19.7098 4.10322 20.5 6.01088 20.5 8V9.25H25.5V11.75H24.0413L23.095 23.1038C23.069 23.4161 22.9266 23.7073 22.696 23.9196C22.4654 24.1319 22.1634 24.2498 21.85 24.25H4.15C3.83656 24.2498 3.53462 24.1319 3.30403 23.9196C3.07343 23.7073 2.93102 23.4161 2.905 23.1038L1.9575 11.75H0.5V9.25H5.5V8C5.5 6.01088 6.29018 4.10322 7.6967 2.6967C9.10322 1.29018 11.0109 0.5 13 0.5ZM14.25 14.25H11.75V19.25H14.25V14.25ZM9.25 14.25H6.75V19.25H9.25V14.25ZM19.25 14.25H16.75V19.25H19.25V14.25ZM13 3C11.7172 3 10.4835 3.49304 9.55399 4.37715C8.62451 5.26127 8.07039 6.4688 8.00625 7.75L8 8V9.25H18V8C18 6.7172 17.507 5.48346 16.6228 4.55399C15.7387 3.62451 14.5312 3.07039 13.25 3.00625L13 3Z" fill="white"></path>
          </svg>
        </a>
          </div>

          <div class="digi-product__actions" v-if="!isMobile">
            <a :href="product.link_url" target="_blank" class="digi-product__button">Посмотреть</a>
          </div>
         
        </div>
      </div>
    </div>

    <template v-if="firstAltIndex > 0">
      <h3 class="digi-products__alternative-headline_divider">Похожие товары</h3>

      <div class="digi-products-grid digi-products-grid_horde">
        <div v-for="(product, key) in products.slice(firstAltIndex)" :data-available="product.available" class="digi-product" :key="key" @click="handleClick(product.id)">
          <a :href="product.link_url" class="digi-product__image-wrapper" target="_blank">
            <img :src="product.image_url || `//cdn.diginetica.net/images/noimage.png`" alt="" class="digi-product__image" onerror="this.src='//cdn.diginetica.net/images/noimage.png';">
          </a>

          <div class="digi-product__main" :class="{ 'digi-product__main_thin': isMobile }">
            <div class="digi-product__meta">

              <div class="digi-product__label">
                <a :href="product.link_url" target="_blank">{{ product.name }}</a>
              </div>
            </div>

          <div class="digi-product__price">
            <div class="digi-product__price-container" v-if="+product.price">
            <span class="digi-product-price-variant digi-product-price-variant_actual"><span v-if="!product.available" class="digi-product__oos-price-label">Последняя цена </span>{{ product.price | thousandSeparator }}
              <span class="digi-product-price-variant__currency">
                  <svg v-if="product.available" width="16" height="19" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <use xlink:href="#ruble-sign"></use>
                </svg>
                <svg v-if="!product.available" width="12" height="12" viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg">
                  <use xlink:href="#ruble-small"></use>
                </svg>
                </span></span>

            <span class="digi-product-price-variant digi-product-price-variant_old" v-if="product.oldPrice"><s>{{ product.oldPrice | thousandSeparator }}
                <span class="digi-product-price-variant__currency">
                    <span class="digi-product-price-variant__currency">
                        <svg width="7" height="9" viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg">
                  <use xlink:href="#ruble-grey"></use>
                </svg>
                </span></span></s></span>
            </div>
        <a class="digi-product-cart-icon" :href="product.link_url" target="_blank">
          <svg width="18" height="18" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M13 0.5C14.9891 0.5 16.8968 1.29018 18.3033 2.6967C19.7098 4.10322 20.5 6.01088 20.5 8V9.25H25.5V11.75H24.0413L23.095 23.1038C23.069 23.4161 22.9266 23.7073 22.696 23.9196C22.4654 24.1319 22.1634 24.2498 21.85 24.25H4.15C3.83656 24.2498 3.53462 24.1319 3.30403 23.9196C3.07343 23.7073 2.93102 23.4161 2.905 23.1038L1.9575 11.75H0.5V9.25H5.5V8C5.5 6.01088 6.29018 4.10322 7.6967 2.6967C9.10322 1.29018 11.0109 0.5 13 0.5ZM14.25 14.25H11.75V19.25H14.25V14.25ZM9.25 14.25H6.75V19.25H9.25V14.25ZM19.25 14.25H16.75V19.25H19.25V14.25ZM13 3C11.7172 3 10.4835 3.49304 9.55399 4.37715C8.62451 5.26127 8.07039 6.4688 8.00625 7.75L8 8V9.25H18V8C18 6.7172 17.507 5.48346 16.6228 4.55399C15.7387 3.62451 14.5312 3.07039 13.25 3.00625L13 3Z" fill="white"></path>
          </svg>
        </a>
          </div>

            <div class="digi-product__actions" v-if="!isMobile">
              <a :href="product.link_url" target="_blank" class="digi-product__button">Посмотреть</a>
            </div>
          </div>
        </div>
      </div>
    </template>

    <div v-if="!hasProducts && !isLoading && term" class="digi-empty">
      <h3>По этому запросу ничего не найдено.</h3>
      <p>Попробуйте сократить запрос или сформулировать его по-другому.</p>
    </div>
  </div>
</template>