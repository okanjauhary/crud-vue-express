<template>
  <div id="app">
    <header-component />
    <data-table />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import DataTable from "./components/DataTable";

export default {
  name: "app",
  components: {
    HeaderComponent,
    FooterComponent,
    DataTable
  }
};
</script>
