<template>
  <div class="k-product-list">
    <h2 class="k-product-list__header">{{title}}</h2>
    <ul>
      <li v-for="(item, idx) in items" :key="idx">
        <md-card class="k-product-item">
          <md-card-media>
            <img :src="item.imageUrl" :alt="item.title">
          </md-card-media>
          <md-card-header>
            <div class="md-title">{{ item.title }}</div>
          </md-card-header>
        </md-card>
      </li>
    </ul>
    <md-button class="md-raised md-primary" @click="addItem">Add Item</md-button>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    addItem() {
      this.items.push({ title: 'New Serie', imageUrl: 'https://via.placeholder.com/400' })
    }
  }
}
</script>
