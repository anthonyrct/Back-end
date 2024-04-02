<div class="container">
    <?php if (!empty($_GET['msgErro'])) { ?>
        <div class="alert alert-warning" role="alert">
            <?php echo $_GET['msgErro']; ?>
        </div>
    <?php } ?>
    <?php if (!empty($_GET['msgSucesso'])) { ?>
        <div class="alert alert-success" role="alert">
            <?php echo $_GET['msgSucesso']; ?>
        </div>
    <?php } ?>
</div>