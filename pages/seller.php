<?php
$pageTitle = 'AutoSphere | Seller Dashboard';
$bodyClass = 'site-canvas site-page-shell';
$basePath = '..';
$currentPage = 'seller.php';

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION['seller_id'])) {
    header('Location: login.php');
    exit;
}

require_once __DIR__ . '/../includes/header.php';
?>

<main class="member-page">
  <section class="shell-container member-page__panel shell-card">
    <div class="login-header">
      <h1>Seller Dashboard</h1>
      <p>
        Welcome, <?php echo htmlspecialchars($_SESSION['seller_name'] ?? 'Seller'); ?>.
        You are now logged in.
      </p>
    </div>

    <div class="login-actions">
      <a href="add-car.php" class="button button-primary effect-glare effect-electric">
        Add Car
      </a>
    </div>

    <div class="login-footer">
      Logged in as:
      <?php echo htmlspecialchars($_SESSION['seller_email'] ?? ''); ?>
    </div>
  </section>
</main>

<?php
require_once __DIR__ . '/../includes/footer.php';
?>
