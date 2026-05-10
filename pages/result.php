<?php
$pageTitle = 'AutoSphere | Search Results';
$bodyClass = 'site-canvas site-page-shell';
$basePath = '..';
$currentPage = 'search.php';

require_once __DIR__ . '/../includes/db.php';

$model = trim($_GET['model'] ?? '');
$year = trim($_GET['year'] ?? '');

$results = [];

if ($model !== '' || $year !== '') {
    $sql = "SELECT * FROM cars WHERE 1=1";
    $params = [];
    $types = "";

    if ($model !== '') {
        $sql .= " AND model LIKE ?";
        $params[] = "%" . $model . "%";
        $types .= "s";
    }

    if ($year !== '') {
        $sql .= " AND year = ?";
        $params[] = (int)$year;
        $types .= "i";
    }

    $sql .= " ORDER BY created_at DESC";

    $stmt = mysqli_prepare($conn, $sql);

    if ($stmt) {
        if (!empty($params)) {
            mysqli_stmt_bind_param($stmt, $types, ...$params);
        }

        mysqli_stmt_execute($stmt);
        $queryResult = mysqli_stmt_get_result($stmt);

        while ($row = mysqli_fetch_assoc($queryResult)) {
            $results[] = $row;
        }

        mysqli_stmt_close($stmt);
    }
}

require_once __DIR__ . '/../includes/header.php';
?>

<main class="member-page">
  <section class="shell-container member-page__panel shell-card">
    <div class="result-intro">
      <h1>Search Results</h1>
      <p>
        Results are shown based on the model or year entered in the search page.
      </p>

      <p class="result-summary">
        Search condition:
        <?php echo $model !== '' ? 'Model: ' . htmlspecialchars($model) : 'Any model'; ?>,
        <?php echo $year !== '' ? 'Year: ' . htmlspecialchars($year) : 'Any year'; ?>
      </p>
    </div>

    <div class="result-list">
      <?php if ($model === '' && $year === ''): ?>

  <div class="result-empty-state">
    <h2>Please enter a search condition</h2>
    <p>You can search by model, year, or both.</p>
    <a href="search.php" class="button button-primary effect-glare effect-electric">
      Back to Search
    </a>
  </div>

      <?php elseif (empty($results)): ?>

        <div class="result-empty-state">
          <h2>No matching cars found</h2>
          <p>Please go back and try another model or year.</p>
          <a href="search.php" class="button button-primary effect-glare effect-electric">
            Search Again
          </a>
        </div>

      <?php else: ?>

        <?php foreach ($results as $car): ?>
          <article class="result-card">
  <div class="result-image-wrap">
    <?php if (!empty($car['image'])): ?>
      <img
        src="../<?php echo htmlspecialchars($car['image']); ?>"
        alt="<?php echo htmlspecialchars(trim(($car['brand'] ?? '') . ' ' . $car['model'])); ?>"
        class="result-car-image"
      >
    <?php else: ?>
      <div class="result-image-placeholder">
        No Image
      </div>
    <?php endif; ?>
  </div>

  <div class="result-card-body">
    <h2>
      <?php echo htmlspecialchars(trim(($car['brand'] ?? '') . ' ' . $car['model'])); ?>
    </h2>

    <div class="result-meta">
      <p><strong>Year:</strong> <?php echo htmlspecialchars($car['year']); ?></p>
      <p><strong>Price:</strong> £<?php echo htmlspecialchars($car['price']); ?></p>
      <p><strong>Location:</strong> <?php echo htmlspecialchars($car['location']); ?></p>

      <?php if (!empty($car['fuel_type'])): ?>
        <p><strong>Fuel Type:</strong> <?php echo htmlspecialchars($car['fuel_type']); ?></p>
      <?php else: ?>
        <p><strong>Fuel Type:</strong> Not provided</p>
      <?php endif; ?>
    </div>

    <div class="result-actions">
      <a 
      href="car-detail.php?id=<?php echo htmlspecialchars($car['car_id']); ?>"
        class="button button-primary effect-glare effect-electric"
      >
        View Details
      </a>
    </div>
  </div>
</article>
        <?php endforeach; ?>

      <?php endif; ?>
    </div>

    <?php if (!empty($results)): ?>
      <div class="result-bottom-actions">
        <a href="search.php" class="button button-primary effect-glare effect-electric">
          Back to Search
        </a>
      </div>
    </div>  
  <?php endif; ?>
  </section>
</main>

<?php
require_once __DIR__ . '/../includes/footer.php';
?>
