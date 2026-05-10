<?php
$pageTitle = 'AutoSphere | Add Car';
$bodyClass = 'site-canvas site-page-shell';
$basePath = '..';
$currentPage = 'add-car.php';

require_once __DIR__ . '/../includes/db.php';

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION['seller_id'])) {
    header('Location: login.php');
    exit;
}

$message = '';
$isSuccess = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $colour = trim($_POST['color'] ?? '');
    $brand = trim($_POST['brand'] ?? '');
    $model = trim($_POST['model'] ?? '');
    $year = trim($_POST['year'] ?? '');
    $price = trim($_POST['price'] ?? '');
    $location = trim($_POST['location'] ?? '');
    $condition = trim($_POST['condition'] ?? '');
    $mileage = trim($_POST['mileage'] ?? '');
    $fuelType = trim($_POST['fuel_type'] ?? '');
    $transmission = trim($_POST['transmission'] ?? '');
    $description = trim($_POST['description'] ?? '');
    
    if (
        $colour === '' ||
        $brand === '' ||
        $model === '' ||
        $year === '' ||
        $price === '' ||
        $location === '' ||
        $condition === '' ||
        $mileage === '' ||
        $fuelType === '' ||
        $transmission === '' ||
        $description === ''||
        empty($_FILES['image']['name'])
    ) {
        $message = 'Please complete all fields.';
    }

    $imagePath = '';

    if (!empty($_FILES['image']['name'])) {
        $uploadDir = __DIR__ . '/../uploads/car-images/';

        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        $fileName = time() . '_' . basename($_FILES['image']['name']);
        $targetFile = $uploadDir . $fileName;

        if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
            $imagePath = 'uploads/car-images/' . $fileName;
        } else {
            $message = 'Failed to upload image.';
        }
    }

    if ($message === '') {
        $sellerId = $_SESSION['seller_id'];

        $sql = "INSERT INTO cars 
                (seller_id, colour, brand, model, year, location, price, mileage, fuel_type, transmission, car_condition, description, image)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $stmt = mysqli_prepare($conn, $sql);

        if ($stmt) {
            mysqli_stmt_bind_param(
                $stmt,
                "isssisdisssss",
                $sellerId,
                $colour,
                $brand,
                $model,
                $year,
                $location,
                $price,
                $mileage,
                $fuelType,
                $transmission,
                $condition,
                $description,
                $imagePath
            );

            if (mysqli_stmt_execute($stmt)) {
                $message = 'Car added successfully!';
                $isSuccess = true;
            } else {
                $message = 'Failed to add car. Please try again.';
            }

            mysqli_stmt_close($stmt);
        } else {
            $message = 'Database query failed.';
        }
    }
}

require_once __DIR__ . '/../includes/header.php';
?>

<main class="member-page">
  <section class="shell-container member-page__panel shell-card">
    <div class="add-car-intro">
      <h1>Add Car</h1>
      <p>
        Use this page to add a new car listing. Please complete all required fields
        so the vehicle can be displayed clearly and accurately in the system.
      </p>
    </div>

    <form class="add-car-form" id="addCarForm" method="POST" action="add-car.php" enctype="multipart/form-data" novalidate>
      <div class="form-grid">
        <div class="form-field">
          <label for="color">Color</label>
          <input type="text" id="color" name="color" placeholder="e.g. Blue, Red">
        </div>

        <div class="form-field">
          <label for="brand">Brand</label>
          <input type="text" id="brand" name="brand" placeholder="e.g. Toyota, Honda">
        </div>

        <div class="form-field">
          <label for="model">Model</label>
          <input type="text" id="model" name="model" placeholder="e.g. Camry, Civic">
        </div>

        <div class="form-field">
          <label for="year">Year</label>
          <input type="number" id="year" name="year" placeholder="e.g. 2022">
        </div>

        <div class="form-field">
          <label for="price">Price (£)</label>
          <input type="number" id="price" name="price" placeholder="e.g. 20000">
        </div>

        <div class="form-field">
          <label for="location">Location</label>
          <input type="text" id="location" name="location" placeholder="e.g. London">
        </div>

        <div class="form-field form-field--full">
          <label for="image">Car Image</label>
          <input type="file" id="image" name="image" accept="image/*">
        </div>

        <div class="form-field form-field--full">
          <label for="condition">Condition</label>
          <input type="text" id="condition" name="condition" placeholder="e.g. New, Used">
        </div>

        <div class="form-field">
          <label for="mileage">Mileage</label>
          <input type="number" id="mileage" name="mileage" placeholder="e.g. 35000">
        </div>

        <div class="form-field">
          <label for="fuel_type">Fuel Type</label>
          <input type="text" id="fuel_type" name="fuel_type" placeholder="e.g. Petrol, Hybrid, Electric">
        </div>

        <div class="form-field form-field--full">
          <label for="transmission">Transmission</label>
          <input type="text" id="transmission" name="transmission" placeholder="e.g. Automatic, Manual">
        </div>

        <div class="form-field form-field--full">
          <label for="description">Description</label>
          <input type="text" id="description" name="description" placeholder="e.g. Clean interior, full service history...">
        </div>
      </div>

      <p class="form-message <?php echo $isSuccess ? 'is-success' : ''; ?>" id="formMessage" aria-live="polite">
        <?php echo htmlspecialchars($message); ?>
      </p>

      <div class="form-actions">
        <button type="submit" class="button button-primary effect-glare effect-electric">
          Submit
        </button>
      </div>
    </form>
  </section>
</main>

<?php
require_once __DIR__ . '/../includes/footer.php';
?>
