<template>
  <div class="app-drawer-layout" narrow>
    <header class="app-header">
      <div class="app-toolbar">

        <section class="app-toolbar__section">
          <button class="app-toolbar__toggle-button" @click="toggleDrawer">
            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill="currentColor" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg>
          </button>
          <span>myApp</span>
        </section>
        <section class="app-toolbar__section align-center">
          <input type="text" placeholder="Search myApp...">
        </section>
        <section class="app-toolbar__section align-end">

          <nav>
            <router-link to="/admin/dashboard">Home</router-link>
            <router-link to="/admin/settings">Settings</router-link>
            <router-link to="/admin">Admin</router-link>
            <router-link to="/about">About</router-link>
          </nav>

        </section>

      </div>

    </header>
    <aside class="app-drawer" tabindex="0">
      <header class="app-drawer__header">
        <span>Menu</span>
      </header>
      <nav @click="toggleDrawer">
        <RouterLink :to="{name: 'admin:dashboard'}">Dashboard</RouterLink>
        <RouterLink :to="{name: 'admin:settings'}">Settings</RouterLink>
      </nav>
    </aside>
    <div class="app-drawer--scrim" @click="toggleDrawer"></div>
    <main class="main-content">
      <RouterView class="page" />
    </main>
  </div>
</template>

<style lang="scss">

.app-drawer-layout {
  display: grid;
  background: #171717;
  color: #fafafa;
  grid-template-rows: 64px auto;
  height: 100%;

  &:not([narrow]) {
    grid-template-columns: 254px auto;
    grid-template-areas: "header header" "drawer main";

  }

  &[narrow] {
    grid-template-columns: auto;
    grid-template-areas: "header" "main";

    .app-drawer {
      .app-drawer__header { display: flex; }
      position: absolute;
      width: 254px;
      height: 100vh;
      transform: translateX(-100%);
      transition: transform .24s ease-in-out;

      &.open {
        transform: translateX(0);
        z-index: 1;

        & + .app-drawer--scrim {
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          opacity: 1;
        }
      }
    }

  }
  .app-header {
    grid-area: header;
    background: #414141;
    color: #fafafa;

    nav {
      display: grid;
      grid-gap: 8px;
      grid-template-columns: repeat(4, auto);

      a { color: inherit; text-decoration: none; }
    }
  }
  .main-content { grid-area: main; }
  .app-drawer {
    grid-area: drawer;
    background: #212121;
    color: #fafafa;

    .app-drawer__header {
      display: none;
      height: 64px;
      align-items: center;
      padding: 0 8px;
    }

    nav {
      display: grid;
      a {
        color: inherit;
        text-decoration: none;
        padding: 8px;

        &.router-link-exact-active { color: rgb(116, 235, 116); }
      }
    }
  }
  .app-drawer--scrim {
    position: absolute;
    background: rgba(0, 0, 0, .7);
    opacity: 0;
    transition: opacity .2s ease;
  }
}


.app-toolbar {
  display: flex;
  min-height: 48px;
  input {
      width: 100%;
    background: rgba(254, 254, 254, 1);
    border: none;
    border-radius: 4px;
    opacity: 0.17;
    transition: opacity .2s ease;
    outline: none;
    padding: .5rem;

    &:focus { opacity: 1; }
  }
}
.app-toolbar__section {
  flex: 1;
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 16px;

  &.align-start { justify-content: flex-start; }
  &.align-center { justify-content: center; }
  &.align-end { justify-content: flex-end; }
}

.app-toolbar__toggle-button {
  --size: 40px;
  display: inline-flex;
  background: rgba(254, 254, 254, 0);
  color: inherit;
  width: var(--size);
  height: var(--size);
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  padding: 0;

  &:hover { background: rgba(254, 254, 254, 0.14); background: rgba(0, 0, 0, 0.14);}
  &:focus { background: rgba(254, 254, 254, 0.14); background: rgba(0, 0, 0, 0.14);}
  &:active { background: rgba(254, 254, 254, 0.27); background: rgba(0, 0, 0, 0.27);}
}
</style>

<script>
/** @returns {HTMLElement} */
const $ = (selectors, el = document.body) => el.querySelector(selectors);

export default {
  methods: {
    toggleDrawer() {
      $('.app-drawer', this.$el).classList.toggle('open')
    }
  }
}
</script>
