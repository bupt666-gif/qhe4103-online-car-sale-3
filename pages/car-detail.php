<?php
$pageTitle = 'AutoSphere | Car Detail';
$bodyClass = 'site-canvas site-page-shell';
$basePath = '..';
$currentPage = 'car-detail.php';

require_once __DIR__ . '/../includes/db.php';

$carId = isset($_GET['id']) ? (int) $_GET['id'] : 0;
$car = null;

if ($carId > 0) {
    $sql = "SELECT 
            cars.*,
            sellers.name AS seller_name,
            sellers.email AS seller_email,
            sellers.phone AS seller_phone
        FROM cars
        LEFT JOIN sellers ON cars.seller_id = sellers.seller_id
        WHERE cars.car_id = ?
        LIMIT 1";
    $stmt = mysqli_prepare($conn, $sql);

    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "i", $carId);
        mysqli_stmt_execute($stmt);

        $result = mysqli_stmt_get_result($stmt);
        $car = mysqli_fetch_assoc($result);

        mysqli_stmt_close($stmt);
    }
}

require_once __DIR__ . '/../includes/header.php';
?>

<main class="member-page">
  <section class="shell-container member-page__panel shell-card">
    <?php if (!$car): ?>

      <div class="detail-intro">
        <h1>Car Not Found</h1>
        <p>The selected car could not be found. Please return to the search page.</p>
      </div>

      <div class="detail-actions">
        <a href="search.php" class="button button-primary effect-glare effect-electric">
          Back to Search
        </a>
      </div>

    <?php else: ?>

      <div class="detail-intro">
        <h1>
          <?php echo htmlspecialchars(trim(($car['brand'] ?? '') . ' ' . ($car['model'] ?? ''))); ?>
        </h1>
        <p>
          This page displays the full vehicle information submitted through the Add Car page.
        </p>
      </div>

      <div class="detail-layout">
        <div class="detail-image-wrap">
          <?php if (!empty($car['image'])): ?>
            <img
              src="../<?php echo htmlspecialchars($car['image']); ?>"
              alt="<?php echo htmlspecialchars(trim(($car['brand'] ?? '') . ' ' . ($car['model'] ?? ''))); ?>"
              class="detail-car-image"
            >
          <?php else: ?>
            <div class="detail-image-placeholder">
              No Image
            </div>
          <?php endif; ?>
        </div>

        <div class="detail-info">
          <h2>Vehicle Information</h2>

          <div class="detail-grid">
            <p><strong>Color:</strong> <?php echo htmlspecialchars($car['colour']); ?></p>
            <p><strong>Brand:</strong> <?php echo htmlspecialchars($car['brand']); ?></p>
            <p><strong>Model:</strong> <?php echo htmlspecialchars($car['model']); ?></p>
            <p><strong>Year:</strong> <?php echo htmlspecialchars($car['year']); ?></p>
            <p><strong>Price:</strong> £<?php echo htmlspecialchars($car['price']); ?></p>
            <p><strong>Location:</strong> <?php echo htmlspecialchars($car['location']); ?></p>
            <p><strong>Condition:</strong> <?php echo htmlspecialchars($car['car_condition']); ?></p>
            <p><strong>Mileage:</strong> <?php echo htmlspecialchars($car['mileage']); ?> miles</p>
            <p><strong>Fuel Type:</strong> <?php echo htmlspecialchars($car['fuel_type']); ?></p>
            <p><strong>Transmission:</strong> <?php echo htmlspecialchars($car['transmission']); ?></p>
          </div>

          <div class="detail-description">
            <h2>Description</h2>
            <p>
              <?php echo !empty($car['description']) ? htmlspecialchars($car['description']) : 'No description provided.'; ?>
            </p>
          </div>

          <div class="detail-description">
            <h2>Seller Information</h2>
            <p><strong>Name:</strong> <?php echo htmlspecialchars($car['seller_name'] ?? 'Not available'); ?></p>
            <p><strong>Email:</strong> <?php echo htmlspecialchars($car['seller_email'] ?? 'Not available'); ?></p>
            <p><strong>Phone:</strong> <?php echo htmlspecialchars($car['seller_phone'] ?? 'Not available'); ?></p>
          </div>
          
          <div class="detail-actions">
            <a href="search.php" class="button button-primary effect-glare effect-electric">
              Back to Search
            </a>
          </div>
        </div>
      </div>

    <?php endif; ?>
  </section>
</main>

<?php
require_once __DIR__ . '/../includes/footer.php';
?>