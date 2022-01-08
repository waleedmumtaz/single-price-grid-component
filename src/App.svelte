<script>
  import Footer from './lib/footer.svelte'
  import MainContent from './lib/main-content.svelte'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div
  class="md:flex md:flex-col min-h-screen bg-cstm-neutral-light-gray py-20 px-10 font-karla"
>
  <MainContent />
  <Footer />
</div>
