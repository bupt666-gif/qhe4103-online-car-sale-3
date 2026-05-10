<?php
$pageTitle = 'AutoSphere | Search Cars';
$bodyClass = 'site-canvas site-page-shell';
$basePath = '..';
$currentPage = 'search.php';
require_once __DIR__ . '/../includes/header.php';
?>

<main class="member-page">
  <section class="shell-container member-page__panel shell-card">
    <div class="search-intro">
      <h1>Search Cars</h1>
      <p>
        Use this page to search for available cars in the system. Enter a model,
        a year, or both to view matching car results.
      </p>
    </div>

    <form class="search-form" id="searchForm" method="GET" action="result.php" novalidate>
      <div class="search-grid">
        <div class="search-field">
          <label for="model">Model</label>
          <input type="text" id="model" name="model" placeholder="e.g. Camry, Civic">
        </div>

        <div class="search-field">
          <label for="year">Year</label>
          <input type="number" id="year" name="year" placeholder="e.g. 2022">
        </div>
      </div>

      <div class="search-feedback">
        <p class="search-message" id="searchMessage" aria-live="polite"></p>

        <div class="search-actions">
          <button type="submit" class="button button-primary effect-glare effect-electric">
            Search
          </button>
        </div>
      </div>
    </form>
  </section>
</main>

<?php
require_once __DIR__ . '/../includes/footer.php';
?>
