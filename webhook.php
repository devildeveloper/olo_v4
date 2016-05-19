<?php

// Only POST data is allowed
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo "This service is not available";
    die;
}

// SET YOUR TIMEZONE
date_default_timezone_set('Europe/Rome');

ignore_user_abort(true);
set_time_limit(0);

$repo          = '/home/juanito/www/olo_v4';
$branch        = 'master';
$output        = array();

// update github Repo
$output[] = date('Y-m-d, H:i:s', time()) . "\n";
$output[] = "GitHub Pull\n============================\n" . shell_exec('cd '.$repo.' && git pull origin '.$branch);

// redirect output to logs
file_put_contents(rtrim(getcwd(), '/').'/___github-log.txt', implode("\n", $output) . "\n----------------------------\n", FILE_APPEND);

// Cleans cache, images and assets folders
rrmdir(__DIR__ . '/../cache', true);
rrmdir(__DIR__ . '/../images', true);
rrmdir(__DIR__ . '/../assets', true);

function rrmdir($dir, $keep) {
    if (!is_dir($dir)) {
        return;
    }

    $objects = scandir($dir);
    foreach ($objects as $object) {
        if ($object == "." || $object == "..") {
            continue;
        }

        $file = $dir . "/" . $object;
        if (filetype($file) == "dir") {
            rrmdir($file, false);
            continue;
        }

        unlink($file);
    }

    if ($keep) {
        return;
    }

    reset($objects);
    rmdir($dir);
}
