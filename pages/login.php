<?php
$pageTitle = 'AutoSphere | Seller Login';
$bodyClass = 'site-canvas site-page-shell';
$basePath = '..';
$currentPage = 'login.php';

require_once __DIR__ . '/../includes/db.php';

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usernameOrEmail = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if ($usernameOrEmail === '' || $password === '') {
        $message = 'Please enter your username/email and password.';
    } else {
        $sql = "SELECT seller_id, name, email, username, password
                FROM sellers
                WHERE email = ? OR username = ?
                LIMIT 1";

        $stmt = mysqli_prepare($conn, $sql);

        if ($stmt) {
            mysqli_stmt_bind_param($stmt, "ss", $usernameOrEmail, $usernameOrEmail);
            mysqli_stmt_execute($stmt);

            $result = mysqli_stmt_get_result($stmt);
            $seller = mysqli_fetch_assoc($result);

            if (!$seller) {
                $message = 'Account not found. Please register first.';
            } elseif (!password_verify($password, $seller['password'])) {
                $message = 'Incorrect password. Please try again.';
            } else {
                $_SESSION['seller_id'] = $seller['seller_id'];
                $_SESSION['seller_name'] = $seller['name'];
                $_SESSION['seller_email'] = $seller['email'];
                $_SESSION['seller_username'] = $seller['username'];

                header('Location: seller.php');
                exit;
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
    <div class="login-header">
      <h1>Seller Login</h1>
      <p>
        This page keeps the shared AutoSphere shell ready for the login and session workflow.
      </p>
    </div>

    <div class="login-form-container">
      <form class="login-form" method="POST" action="login.php" novalidate>
        <div class="login-group">
          <label for="username">Email / Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your email or username"
          >
        </div>

        <div class="login-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          >
        </div>

        <div class="login-options">
          <label class="remember-me">
            <input type="checkbox" name="remember">
            Remember me
          </label>
        </div>

        <p class="form-message">
          <?php echo htmlspecialchars($message); ?>
        </p>

        <div class="login-actions">
          <button type="submit" class="button button-primary effect-glare effect-electric">
            Login
          </button>
        </div>
      </form>

      <div class="login-footer">
        Don't have an account?
        <a href="register.php">Register here</a>
      </div>
    </div>
  </section>
</main>

<?php
require_once __DIR__ . '/../includes/footer.php';
?>
