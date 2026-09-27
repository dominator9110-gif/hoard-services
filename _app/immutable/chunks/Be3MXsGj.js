var ze=Object.defineProperty;var He=(n,e,a)=>e in n?ze(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a;var g=(n,e,a)=>He(n,typeof e!="symbol"?e+"":e,a);import{L as we,D as Ce}from"./B3cuW3tw.js";const qe=`---
title: "So sicherst und synchronisierst du Emulator-Spielstände (RetroArch, Dolphin, PCSX2)"
description: "Sichere und synchronisiere deine Emulator-Speicherdateien und Savestates über mehrere PCs — RetroArch, Dolphin, PCSX2, DuckStation und mehr — automatisch mit Hoard."
order: 6
updated: 2026-06-28
---

Emulator-Stände gehen leicht verloren: Speicherdateien und Savestates liegen in verstreuten Ordnern, und eine Neuinstallation oder ein neuer PC kann Jahre an Fortschritt löschen. Hoard sichert sie automatisch und hält sie über mehrere Geräte synchron.

## Emulatoren, mit denen Hoard funktioniert

Hoard verarbeitet gängige Emulator-Speicherdateien (\`.srm\`, \`.sav\`, Memory Cards) und Savestates der beliebten Emulatoren, darunter:

- **RetroArch** — Stände und Savestates pro Core
- **Dolphin** (GameCube / Wii) — Memory Cards und GCI-Dateien
- **PCSX2** (PS2) — Memory Cards
- **DuckStation / ePSXe** (PS1), **PPSSPP** (PSP), **mGBA** und mehr

Da Hoard Speicherordner mit derselben Community-Datenbank findet, die auch Ludusavi antreibt, werden viele Emulator-Pfade automatisch erkannt. Für alles Eigene kannst du Hoard von Hand auf einen Ordner verweisen.

## Emulator-Backups einrichten

1. **Installiere Hoard** für Windows, macOS oder Linux und melde dich an.
2. Öffne die **Bibliothek** und füge deinen Emulator hinzu, oder ergänze seinen Stände-/Savestate-Ordner manuell, falls du den Standardort geändert hast.
3. Lass den **Automatikmodus** an. Hoard sichert nach jeder Sitzung und führt eine versionierte Historie.
4. Installiere Hoard mit demselben Konto auf deinen anderen PCs, um diese Stände überall zu synchronisieren — siehe [Spielstände über PCs synchronisieren](/guides/sync-game-saves-across-pcs).

## Ludusavi für Emulatoren?

Ludusavi kann Emulator-Stände ebenfalls lokal sichern und ist dafür eine großartige kostenlose Option. Wenn diese Emulator-Stände zusätzlich automatisch zwischen Geräten synchronisieren und eine Cloud-Versionshistorie behalten sollen, ohne Rclone zu konfigurieren, hilft Hoard — lies den vollständigen [Vergleich Ludusavi vs. Hoard](/guides/ludusavi-alternative).

## Tipp

Savestates sind an eine bestimmte Emulator-Version gebunden. Halte deine Emulatoren über alle PCs hinweg einheitlich aktuell, damit ein synchronisierter Savestate überall sauber lädt.
`,Le=`---
title: "How to back up and sync emulator saves (RetroArch, Dolphin, PCSX2)"
description: "Back up and sync your emulator save files and save states across PCs — RetroArch, Dolphin, PCSX2, DuckStation and more — automatically with Hoard."
order: 6
updated: 2026-06-28
---

Emulator saves are easy to lose: save files and save states live in scattered folders, and a reinstall or a new PC can wipe years of progress. Hoard backs them up automatically and keeps them in sync across machines.

## Emulators Hoard works with

Hoard handles standard emulator save files (\`.srm\`, \`.sav\`, memory cards) and save states for the popular emulators, including:

- **RetroArch** — per-core saves and states
- **Dolphin** (GameCube / Wii) — memory cards and GCI files
- **PCSX2** (PS2) — memory cards
- **DuckStation / ePSXe** (PS1), **PPSSPP** (PSP), **mGBA**, and more

Because Hoard locates save folders using the same community database that powers Ludusavi, many emulator paths are detected automatically. For anything custom, you can point Hoard at a folder by hand.

## Set up emulator save backups

1. **Install Hoard** for Windows, macOS or Linux and sign in.
2. Open the **Library** and add your emulator, or add its saves/states folder manually if you've changed the default location.
3. Keep **automatic mode** on. Hoard backs up after each session and keeps a versioned history.
4. Install Hoard on your other PCs with the same account to sync those saves everywhere — see [syncing saves across PCs](/guides/sync-game-saves-across-pcs).

## Ludusavi for emulators?

Ludusavi can back up emulator saves locally too, and it's a great free option for that. If you also want those emulator saves to sync automatically between machines and keep a cloud version history without configuring Rclone, that's where Hoard helps — read the full [Ludusavi vs Hoard comparison](/guides/ludusavi-alternative).

## Tip

Save states are tied to a specific emulator version. Keep your emulators updated consistently across PCs so a synced state loads cleanly everywhere.
`,xe=`---
title: "Cómo hacer copia y sincronizar partidas de emuladores (RetroArch, Dolphin, PCSX2)"
description: "Haz copia y sincroniza los archivos de guardado y los estados guardados de tus emuladores entre PC —RetroArch, Dolphin, PCSX2, DuckStation y más— automáticamente con Hoard."
order: 6
updated: 2026-06-28
---

Las partidas de emulador se pierden con facilidad: los archivos de guardado y los estados guardados viven en carpetas dispersas, y una reinstalación o un PC nuevo pueden borrar años de progreso. Hoard hace la copia automáticamente y los mantiene sincronizados entre equipos.

## Emuladores con los que funciona Hoard

Hoard gestiona los archivos de guardado estándar de emulador (\`.srm\`, \`.sav\`, memory cards) y los estados guardados de los emuladores populares, entre ellos:

- **RetroArch** — guardados y estados por núcleo
- **Dolphin** (GameCube / Wii) — memory cards y archivos GCI
- **PCSX2** (PS2) — memory cards
- **DuckStation / ePSXe** (PS1), **PPSSPP** (PSP), **mGBA** y más

Como Hoard localiza las carpetas de guardado con la misma base de datos comunitaria que utiliza Ludusavi, muchas rutas de emulador se detectan automáticamente. Para cualquier ruta personalizada, puedes apuntar Hoard a una carpeta a mano.

## Configura la copia de partidas de emulador

1. **Instala Hoard** para Windows, macOS o Linux e inicia sesión.
2. Abre la **Biblioteca** y añade tu emulador, o añade manualmente su carpeta de guardados/estados si has cambiado la ubicación por defecto.
3. Mantén el **modo automático** activado. Hoard hace la copia tras cada sesión y guarda un historial versionado.
4. Instala Hoard en tus otros PC con la misma cuenta para sincronizar esas partidas en todas partes; mira [cómo sincronizar partidas entre PC](/guides/sync-game-saves-across-pcs).

## ¿Ludusavi para emuladores?

Ludusavi también puede hacer copia de partidas de emulador en local, y es una gran opción gratuita para eso. Si además quieres que esas partidas de emulador se sincronicen automáticamente entre equipos y mantengan un historial de versiones en la nube sin configurar Rclone, ahí es donde ayuda Hoard; lee la [comparativa completa entre Ludusavi y Hoard](/guides/ludusavi-alternative).

## Consejo

Los estados guardados dependen de una versión concreta del emulador. Mantén tus emuladores actualizados de forma coherente entre PC para que un estado sincronizado cargue bien en todas partes.
`,Pe=`---
title: "Comment sauvegarder et synchroniser les sauvegardes d'émulateur (RetroArch, Dolphin, PCSX2)"
description: "Sauvegardez et synchronisez vos fichiers de sauvegarde et vos save states d'émulateur entre PC — RetroArch, Dolphin, PCSX2, DuckStation et plus — automatiquement avec Hoard."
order: 6
updated: 2026-06-28
---

Les sauvegardes d'émulateur se perdent facilement : fichiers de sauvegarde et save states vivent dans des dossiers éparpillés, et une réinstallation ou un nouveau PC peut effacer des années de progression. Hoard les sauvegarde automatiquement et les garde synchronisées entre machines.

## Émulateurs pris en charge par Hoard

Hoard gère les fichiers de sauvegarde d'émulateur courants (\`.srm\`, \`.sav\`, cartes mémoire) et les save states des émulateurs populaires, dont :

- **RetroArch** — sauvegardes et états par cœur
- **Dolphin** (GameCube / Wii) — cartes mémoire et fichiers GCI
- **PCSX2** (PS2) — cartes mémoire
- **DuckStation / ePSXe** (PS1), **PPSSPP** (PSP), **mGBA**, et plus

Comme Hoard localise les dossiers de sauvegarde avec la même base communautaire que celle qui alimente Ludusavi, de nombreux chemins d'émulateur sont détectés automatiquement. Pour tout cas particulier, vous pouvez pointer Hoard vers un dossier à la main.

## Configurer les sauvegardes d'émulateur

1. **Installez Hoard** pour Windows, macOS ou Linux et connectez-vous.
2. Ouvrez la **Bibliothèque** et ajoutez votre émulateur, ou ajoutez son dossier de sauvegardes/états manuellement si vous avez changé l'emplacement par défaut.
3. Gardez le **mode automatique** activé. Hoard sauvegarde après chaque session et conserve un historique versionné.
4. Installez Hoard sur vos autres PC avec le même compte pour synchroniser ces sauvegardes partout — voir [synchroniser vos parties entre PC](/guides/sync-game-saves-across-pcs).

## Ludusavi pour les émulateurs ?

Ludusavi peut aussi sauvegarder les parties d'émulateur en local, et c'est une excellente option gratuite pour cela. Si vous voulez en plus que ces sauvegardes d'émulateur se synchronisent automatiquement entre machines et conservent un historique de versions cloud sans configurer Rclone, c'est là que Hoard aide — lisez la [comparaison complète Ludusavi vs Hoard](/guides/ludusavi-alternative).

## Astuce

Les save states sont liés à une version précise de l'émulateur. Gardez vos émulateurs à jour de façon cohérente sur tous vos PC pour qu'un état synchronisé se charge correctement partout.
`,De=`---
title: "Come fare il backup e sincronizzare i salvataggi degli emulatori (RetroArch, Dolphin, PCSX2)"
description: "Fai il backup e sincronizza i file di salvataggio e i save state dei tuoi emulatori tra PC — RetroArch, Dolphin, PCSX2, DuckStation e altri — automaticamente con Hoard."
order: 6
updated: 2026-06-28
---

I salvataggi degli emulatori si perdono facilmente: file di salvataggio e save state vivono in cartelle sparse, e una reinstallazione o un nuovo PC possono cancellare anni di progressi. Hoard ne fa il backup automaticamente e li mantiene sincronizzati tra le macchine.

## Emulatori con cui funziona Hoard

Hoard gestisce i file di salvataggio standard degli emulatori (\`.srm\`, \`.sav\`, memory card) e i save state degli emulatori popolari, tra cui:

- **RetroArch** — salvataggi e stati per core
- **Dolphin** (GameCube / Wii) — memory card e file GCI
- **PCSX2** (PS2) — memory card
- **DuckStation / ePSXe** (PS1), **PPSSPP** (PSP), **mGBA** e altri

Poiché Hoard individua le cartelle di salvataggio con lo stesso database comunitario che alimenta Ludusavi, molti percorsi degli emulatori vengono rilevati automaticamente. Per qualsiasi caso personalizzato, puoi puntare Hoard a una cartella a mano.

## Imposta i backup dei salvataggi degli emulatori

1. **Installa Hoard** per Windows, macOS o Linux e accedi.
2. Apri la **Libreria** e aggiungi il tuo emulatore, oppure aggiungi manualmente la sua cartella di salvataggi/stati se hai cambiato la posizione predefinita.
3. Tieni attiva la **modalità automatica**. Hoard fa il backup dopo ogni sessione e conserva una cronologia versionata.
4. Installa Hoard sugli altri PC con lo stesso account per sincronizzare quei salvataggi ovunque — vedi [sincronizzare i salvataggi tra PC](/guides/sync-game-saves-across-pcs).

## Ludusavi per gli emulatori?

Ludusavi può fare il backup dei salvataggi degli emulatori anche in locale, ed è un'ottima opzione gratuita per questo. Se vuoi anche che quei salvataggi degli emulatori si sincronizzino automaticamente tra le macchine e mantengano una cronologia versioni nel cloud senza configurare Rclone, è qui che Hoard aiuta — leggi il [confronto completo Ludusavi vs Hoard](/guides/ludusavi-alternative).

## Suggerimento

I save state sono legati a una versione specifica dell'emulatore. Mantieni i tuoi emulatori aggiornati in modo coerente su tutti i PC così che uno stato sincronizzato si carichi senza problemi ovunque.
`,Oe=`---
title: "エミュレーターのセーブをバックアップ・同期する方法（RetroArch、Dolphin、PCSX2）"
description: "エミュレーターのセーブファイルとセーブステートを PC 間でバックアップ・同期。RetroArch、Dolphin、PCSX2、DuckStation などに対応し、Hoard が自動で処理します。"
order: 6
updated: 2026-06-28
---

エミュレーターのセーブは失われやすいものです。セーブファイルやセーブステートは散らばったフォルダーに置かれ、再インストールや新しい PC で何年もの進行が消えることがあります。Hoard はそれらを自動でバックアップし、マシン間で同期し続けます。

## Hoard が対応するエミュレーター

Hoard は一般的なエミュレーターのセーブファイル（\`.srm\`、\`.sav\`、メモリーカード）と、人気エミュレーターのセーブステートを扱います。たとえば：

- **RetroArch** — コアごとのセーブとステート
- **Dolphin**（GameCube / Wii）— メモリーカードと GCI ファイル
- **PCSX2**（PS2）— メモリーカード
- **DuckStation / ePSXe**（PS1）、**PPSSPP**（PSP）、**mGBA** など

Hoard は Ludusavi を支えているのと同じコミュニティデータベースでセーブフォルダーを特定するため、多くのエミュレーターのパスが自動で検出されます。独自の場所については、Hoard を手動でフォルダーに向けられます。

## エミュレーターのセーブバックアップを設定する

1. Windows、macOS、Linux 向けの **Hoard をインストール** し、サインインします。
2. **ライブラリ** を開いてエミュレーターを追加します。既定の場所を変更している場合は、セーブ／ステートのフォルダーを手動で追加します。
3. **自動モード** をオンのままにします。Hoard は各セッション後にバックアップし、世代履歴を保持します。
4. 同じアカウントでほかの PC にも Hoard をインストールすると、それらのセーブをどこでも同期できます――[PC 間でセーブを同期する方法](/guides/sync-game-saves-across-pcs) をご覧ください。

## エミュレーターに Ludusavi？

Ludusavi もエミュレーターのセーブをローカルにバックアップでき、そのための無料の優れた選択肢です。さらに、それらのエミュレーターのセーブをマシン間で自動同期し、Rclone を設定せずにクラウドの世代履歴を保ちたいなら、そこで Hoard が役立ちます――[Ludusavi と Hoard の完全な比較](/guides/ludusavi-alternative) をお読みください。

## ヒント

セーブステートは特定のエミュレーターのバージョンに結び付いています。同期したステートがどこでも問題なく読み込まれるよう、すべての PC でエミュレーターのバージョンを揃えて更新しておきましょう。
`,Re=`---
title: "Como fazer backup e sincronizar saves de emuladores (RetroArch, Dolphin, PCSX2)"
description: "Faz backup e sincroniza os ficheiros de save e os save states dos teus emuladores entre PCs — RetroArch, Dolphin, PCSX2, DuckStation e mais — automaticamente com o Hoard."
order: 6
updated: 2026-06-28
---

Os saves de emulador perdem-se com facilidade: ficheiros de save e save states vivem em pastas espalhadas, e uma reinstalação ou um PC novo podem apagar anos de progresso. O Hoard faz-lhes backup automaticamente e mantém-nos sincronizados entre máquinas.

## Emuladores com que o Hoard funciona

O Hoard trata os ficheiros de save padrão de emulador (\`.srm\`, \`.sav\`, memory cards) e os save states dos emuladores populares, incluindo:

- **RetroArch** — saves e estados por core
- **Dolphin** (GameCube / Wii) — memory cards e ficheiros GCI
- **PCSX2** (PS2) — memory cards
- **DuckStation / ePSXe** (PS1), **PPSSPP** (PSP), **mGBA** e mais

Como o Hoard localiza as pastas de save com a mesma base de dados comunitária que alimenta o Ludusavi, muitos caminhos de emulador são detetados automaticamente. Para qualquer caso personalizado, podes apontar o Hoard para uma pasta à mão.

## Configurar backups de saves de emulador

1. **Instala o Hoard** para Windows, macOS ou Linux e inicia sessão.
2. Abre a **Biblioteca** e adiciona o teu emulador, ou adiciona manualmente a sua pasta de saves/estados se mudaste a localização predefinida.
3. Mantém o **modo automático** ligado. O Hoard faz backup depois de cada sessão e guarda um histórico versionado.
4. Instala o Hoard nos teus outros PCs com a mesma conta para sincronizar esses saves em todo o lado — vê [sincronizar saves entre PCs](/guides/sync-game-saves-across-pcs).

## Ludusavi para emuladores?

O Ludusavi também pode fazer backup de saves de emulador localmente, e é uma excelente opção gratuita para isso. Se queres, além disso, que esses saves de emulador sincronizem automaticamente entre máquinas e mantenham um histórico de versões na nuvem sem configurar o Rclone, é aí que o Hoard ajuda — lê a [comparação completa Ludusavi vs Hoard](/guides/ludusavi-alternative).

## Dica

Os save states estão ligados a uma versão específica do emulador. Mantém os teus emuladores atualizados de forma coerente em todos os PCs para que um estado sincronizado carregue bem em todo o lado.
`,Ae=`---
title: "如何备份和同步模拟器存档（RetroArch、Dolphin、PCSX2）"
description: "用 Hoard 在多台 PC 之间自动备份和同步你的模拟器存档文件与即时存档——支持 RetroArch、Dolphin、PCSX2、DuckStation 等。"
order: 6
updated: 2026-06-28
---

模拟器存档很容易丢失：存档文件和即时存档散落在各处的文件夹里，一次重装或换一台新 PC 就可能清除多年的进度。Hoard 会自动备份它们，并在多台机器之间保持同步。

## Hoard 支持的模拟器

Hoard 可处理常见的模拟器存档文件（\`.srm\`、\`.sav\`、记忆卡）以及主流模拟器的即时存档，包括：

- **RetroArch** —— 按核心区分的存档和即时存档
- **Dolphin**（GameCube / Wii）—— 记忆卡和 GCI 文件
- **PCSX2**（PS2）—— 记忆卡
- **DuckStation / ePSXe**（PS1）、**PPSSPP**（PSP）、**mGBA** 等

由于 Hoard 使用与 Ludusavi 相同的社区数据库来定位存档文件夹，许多模拟器路径都会被自动检测。对于任何自定义位置，你都可以手动把 Hoard 指向某个文件夹。

## 设置模拟器存档备份

1. **安装 Hoard**（Windows、macOS 或 Linux）并登录。
2. 打开**库**并添加你的模拟器；如果你更改了默认位置，请手动添加它的存档／即时存档文件夹。
3. 保持**自动模式**开启。Hoard 会在每次会话后备份，并保留版本历史。
4. 用同一账号在你的其他 PC 上安装 Hoard，即可在任何地方同步这些存档——请见[在多台 PC 之间同步存档](/guides/sync-game-saves-across-pcs)。

## 模拟器用 Ludusavi？

Ludusavi 同样可以在本地备份模拟器存档，对此它是一个很好的免费选择。如果你还希望这些模拟器存档在多台机器之间自动同步，并在不配置 Rclone 的情况下保留云端版本历史，那就是 Hoard 能帮上忙的地方——请阅读完整的 [Ludusavi 与 Hoard 对比](/guides/ludusavi-alternative)。

## 提示

即时存档与特定的模拟器版本绑定。请在所有 PC 上保持模拟器版本一致地更新，这样同步过来的即时存档才能在各处正常加载。
`,_e=`---
title: "So sicherst du deine Spielstände automatisch"
description: "Richte automatische, versionierte Cloud-Backups für deine PC-Spielstände mit Hoard ein — damit ein Absturz, eine Neuinstallation oder ein fehlerhafter Mod deinen Fortschritt nie löschen kann."
order: 1
updated: 2026-06-28
---

Ein verlorener Spielstand bedeutet verlorene Stunden an Fortschritt. Hoard sichert deine PC-Spielstände automatisch und führt eine vollständige Versionshistorie, sodass du immer zurückgehen kannst.

## Was Hoard sichert

Hoard erkennt die Speicherordner der Spiele, die du spielst, und kopiert sie in deine eigene Cloud — entweder Hoard Cloud oder einen selbst gehosteten Server. Jedes Backup ist versioniert, ältere Kopien werden also nie überschrieben.

Um zu finden, wo jedes Spiel seine Stände ablegt, nutzt Hoard dieselbe Community-Datenbank für Speicherorte, die auch Ludusavi antreibt — die Erkennung funktioniert also sofort für Tausende von Titeln. Der Unterschied liegt darin, was danach passiert: Statt das Backup auf deiner Festplatte zu belassen, versioniert Hoard es automatisch in der Cloud.

## Automatische Backups einrichten

1. **Lade Hoard herunter und installiere es** für Windows, macOS oder Linux von der Download-Seite.
2. Melde dich an oder richte die App auf deinen selbst gehosteten Server aus.
3. Öffne die **Bibliothek**. Hoard sucht nach installierten Spielen und listet die gefundenen Stände auf.
4. Füge die Spiele hinzu, die du schützen willst. Hoard findet jeden Speicherordner automatisch; du kannst einen Pfad von Hand ergänzen, falls ein Spiel nicht erkannt wird.
5. Lass den **Automatikmodus** an. Hoard überwacht die Speicherordner und sichert sie, nachdem du aufhörst zu spielen.

Ab jetzt wird jede Sitzung erfasst, ohne dass du etwas tun musst.

## Tipp: Prüfe deine Historie

Öffne den Reiter **Historie** eines Spiels, um jedes Backup mit Datum und Größe zu sehen. Von dort kannst du jede frühere Version mit einem Klick wiederherstellen. Deine Stände werden verschlüsselt übertragen, in der EU gespeichert, und du kannst sie jederzeit exportieren oder löschen.

Nutzt du bereits ein lokales Backup-Tool wie Ludusavi? Du kannst es behalten — aber wenn diese Backups in der Cloud landen und zwischen Geräten synchronisieren sollen, ohne dass du Rclone selbst einrichtest, ist genau das, was Hoard automatisiert. Siehe [Ludusavi vs. Hoard](/guides/ludusavi-alternative) für einen fairen Vergleich.
`,je=`---
title: "How to back up your game saves automatically"
description: "Set up automatic, versioned cloud backups for your PC game saves with Hoard — so a crash, reinstall or bad mod can never wipe your progress."
order: 1
updated: 2026-06-28
---

Losing a save file means losing hours of progress. Hoard backs up your PC game saves automatically and keeps a full version history, so you can always go back.

## What Hoard backs up

Hoard detects the save folders of the games you play and copies them to your own cloud — either Hoard Cloud or a server you host yourself. Every backup is versioned, so older copies are never overwritten.

To find where each game stores its saves, Hoard reads the same community save-location database that powers Ludusavi, so detection works out of the box for thousands of titles. The difference is what happens next: instead of leaving the backup on your disk, Hoard versions it in the cloud automatically.

## Set up automatic backups

1. **Download and install Hoard** for Windows, macOS or Linux from the download page.
2. Sign in, or point the app at your self-hosted server.
3. Open the **Library**. Hoard scans for installed games and lists the saves it finds.
4. Add the games you want to protect. Hoard locates each save folder automatically; you can add a path by hand if a game isn't detected.
5. Leave **automatic mode** on. Hoard watches the save folders and backs them up after you stop playing.

From now on every session is captured without you doing anything.

## Tip: check your history

Open a game's **History** tab to see every backup with its date and size. From there you can restore any previous version in one click. Your saves travel encrypted, are stored in the EU, and you can export or delete them whenever you want.

Already use a local backup tool like Ludusavi? You can keep it — but if you want those backups to land in the cloud and sync between machines without scripting Rclone yourself, that's exactly what Hoard automates. See [Ludusavi vs Hoard](/guides/ludusavi-alternative) for a fair comparison.
`,Ge=`---
title: "Cómo hacer copias de seguridad de tus partidas automáticamente"
description: "Configura copias de seguridad automáticas y versionadas en la nube de tus partidas de PC con Hoard, para que un fallo, una reinstalación o un mod problemático nunca borren tu progreso."
order: 1
updated: 2026-06-28
---

Perder una partida guardada significa perder horas de progreso. Hoard hace copias de seguridad de tus partidas de PC automáticamente y guarda un historial completo de versiones, para que siempre puedas volver atrás.

## Qué guarda Hoard

Hoard detecta las carpetas de guardado de los juegos a los que juegas y las copia a tu propia nube: Hoard Cloud o un servidor que alojes tú mismo. Cada copia está versionada, así que las versiones antiguas nunca se sobrescriben.

Para saber dónde guarda cada juego sus partidas, Hoard usa la misma base de datos comunitaria de ubicaciones que utiliza Ludusavi, así que la detección funciona desde el primer momento con miles de títulos. La diferencia está en lo que pasa después: en vez de dejar la copia en tu disco, Hoard la versiona en la nube automáticamente.

## Configura las copias automáticas

1. **Descarga e instala Hoard** para Windows, macOS o Linux desde la página de descargas.
2. Inicia sesión o apunta la app a tu servidor autoalojado.
3. Abre la **Biblioteca**. Hoard busca los juegos instalados y lista las partidas que encuentra.
4. Añade los juegos que quieras proteger. Hoard localiza cada carpeta de guardado automáticamente; puedes añadir una ruta a mano si un juego no se detecta.
5. Deja activado el **modo automático**. Hoard vigila las carpetas de guardado y hace la copia cuando dejas de jugar.

A partir de ahí cada sesión queda guardada sin que hagas nada.

## Consejo: revisa tu historial

Abre la pestaña **Historial** de un juego para ver cada copia con su fecha y tamaño. Desde ahí puedes restaurar cualquier versión anterior con un clic. Tus partidas viajan cifradas, se almacenan en la UE y puedes exportarlas o borrarlas cuando quieras.

¿Ya usas una herramienta de copia local como Ludusavi? Puedes seguir usándola, pero si quieres que esas copias acaben en la nube y se sincronicen entre equipos sin montar Rclone a mano, eso es justo lo que Hoard automatiza. Mira [Ludusavi frente a Hoard](/guides/ludusavi-alternative) para una comparativa justa.
`,Te=`---
title: "Comment sauvegarder vos parties automatiquement"
description: "Configurez des sauvegardes cloud automatiques et versionnées de vos parties PC avec Hoard — pour qu'un plantage, une réinstallation ou un mod défectueux n'efface jamais votre progression."
order: 1
updated: 2026-06-28
---

Perdre une sauvegarde, c'est perdre des heures de progression. Hoard sauvegarde vos parties PC automatiquement et conserve un historique complet des versions, pour que vous puissiez toujours revenir en arrière.

## Ce que Hoard sauvegarde

Hoard détecte les dossiers de sauvegarde des jeux auxquels vous jouez et les copie vers votre propre cloud — Hoard Cloud ou un serveur que vous hébergez vous-même. Chaque sauvegarde est versionnée, les anciennes copies ne sont donc jamais écrasées.

Pour trouver où chaque jeu range ses sauvegardes, Hoard utilise la même base de données communautaire d'emplacements que celle qui alimente Ludusavi : la détection fonctionne donc d'emblée pour des milliers de titres. La différence, c'est ce qui se passe ensuite : au lieu de laisser la sauvegarde sur votre disque, Hoard la versionne automatiquement dans le cloud.

## Configurer les sauvegardes automatiques

1. **Téléchargez et installez Hoard** pour Windows, macOS ou Linux depuis la page de téléchargement.
2. Connectez-vous, ou pointez l'application vers votre serveur auto-hébergé.
3. Ouvrez la **Bibliothèque**. Hoard recherche les jeux installés et liste les sauvegardes trouvées.
4. Ajoutez les jeux à protéger. Hoard localise chaque dossier de sauvegarde automatiquement ; vous pouvez ajouter un chemin à la main si un jeu n'est pas détecté.
5. Laissez le **mode automatique** activé. Hoard surveille les dossiers de sauvegarde et les sauvegarde après que vous arrêtez de jouer.

Désormais, chaque session est capturée sans que vous ayez à faire quoi que ce soit.

## Astuce : consultez votre historique

Ouvrez l'onglet **Historique** d'un jeu pour voir chaque sauvegarde avec sa date et sa taille. De là, vous pouvez restaurer n'importe quelle version précédente en un clic. Vos sauvegardes circulent chiffrées, sont stockées dans l'UE, et vous pouvez les exporter ou les supprimer quand vous voulez.

Vous utilisez déjà un outil de sauvegarde locale comme Ludusavi ? Vous pouvez le garder — mais si vous voulez que ces sauvegardes arrivent dans le cloud et se synchronisent entre vos machines sans scripter Rclone vous-même, c'est précisément ce que Hoard automatise. Voir [Ludusavi vs Hoard](/guides/ludusavi-alternative) pour une comparaison équitable.
`,Ie=`---
title: "Come fare il backup dei salvataggi automaticamente"
description: "Imposta backup cloud automatici e versionati dei tuoi salvataggi PC con Hoard — così un crash, una reinstallazione o una mod difettosa non potranno mai cancellare i tuoi progressi."
order: 1
updated: 2026-06-28
---

Perdere un salvataggio significa perdere ore di progressi. Hoard fa il backup dei tuoi salvataggi PC automaticamente e conserva una cronologia completa delle versioni, così puoi sempre tornare indietro.

## Cosa salva Hoard

Hoard rileva le cartelle di salvataggio dei giochi a cui giochi e le copia sul tuo cloud — Hoard Cloud o un server che ospiti tu stesso. Ogni backup è versionato, quindi le copie più vecchie non vengono mai sovrascritte.

Per trovare dove ogni gioco conserva i salvataggi, Hoard usa lo stesso database comunitario di posizioni che alimenta Ludusavi, quindi il rilevamento funziona da subito per migliaia di titoli. La differenza è ciò che succede dopo: invece di lasciare il backup sul disco, Hoard lo versiona automaticamente nel cloud.

## Imposta i backup automatici

1. **Scarica e installa Hoard** per Windows, macOS o Linux dalla pagina di download.
2. Accedi, oppure punta l'app al tuo server self-hosted.
3. Apri la **Libreria**. Hoard cerca i giochi installati ed elenca i salvataggi trovati.
4. Aggiungi i giochi che vuoi proteggere. Hoard individua ogni cartella di salvataggio automaticamente; puoi aggiungere un percorso a mano se un gioco non viene rilevato.
5. Lascia attiva la **modalità automatica**. Hoard sorveglia le cartelle di salvataggio e fa il backup dopo che smetti di giocare.

Da ora ogni sessione viene catturata senza che tu faccia nulla.

## Suggerimento: controlla la cronologia

Apri la scheda **Cronologia** di un gioco per vedere ogni backup con data e dimensione. Da lì puoi ripristinare qualsiasi versione precedente con un clic. I tuoi salvataggi viaggiano cifrati, sono archiviati nell'UE, e puoi esportarli o eliminarli quando vuoi.

Usi già uno strumento di backup locale come Ludusavi? Puoi tenerlo — ma se vuoi che quei backup finiscano nel cloud e si sincronizzino tra le macchine senza scriptare Rclone a mano, è esattamente ciò che Hoard automatizza. Vedi [Ludusavi vs Hoard](/guides/ludusavi-alternative) per un confronto equo.
`,We=`---
title: "ゲームのセーブデータを自動でバックアップする方法"
description: "Hoard で PC ゲームのセーブデータを自動かつ世代管理付きでクラウドにバックアップ。クラッシュ・再インストール・不具合のある MOD でも進行データが消える心配はありません。"
order: 1
updated: 2026-06-28
---

セーブデータを失うことは、何時間もの進行を失うことです。Hoard は PC ゲームのセーブデータを自動でバックアップし、完全なバージョン履歴を保持するので、いつでも巻き戻せます。

## Hoard がバックアップするもの

Hoard はプレイしているゲームのセーブフォルダーを検出し、あなた自身のクラウド（Hoard Cloud または自分でホストするサーバー）へコピーします。各バックアップは世代管理されるため、古いコピーが上書きされることはありません。

各ゲームがどこにセーブを保存しているかを見つけるために、Hoard は Ludusavi を支えているのと同じコミュニティのセーブ位置データベースを利用します。そのため数千タイトルで検出がすぐに機能します。違いはその後にあります。バックアップをディスクに残すのではなく、Hoard は自動的にクラウドで世代管理します。

## 自動バックアップを設定する

1. ダウンロードページから Windows、macOS、Linux 向けの **Hoard をダウンロードしてインストール** します。
2. サインインするか、アプリを自分のセルフホストサーバーに向けます。
3. **ライブラリ** を開きます。Hoard がインストール済みのゲームを探し、見つけたセーブを一覧表示します。
4. 保護したいゲームを追加します。Hoard は各セーブフォルダーを自動で特定します。ゲームが検出されない場合は手動でパスを追加できます。
5. **自動モード** をオンのままにします。Hoard はセーブフォルダーを監視し、プレイを終えた後にバックアップします。

これ以降、何もしなくても毎回のセッションが記録されます。

## ヒント：履歴を確認する

ゲームの **履歴** タブを開くと、各バックアップを日付とサイズ付きで確認できます。そこからどの過去バージョンもワンクリックで復元できます。セーブは暗号化されて転送され、EU 内に保存され、いつでもエクスポートや削除が可能です。

すでに Ludusavi のようなローカルバックアップツールを使っていますか？ そのまま使い続けても構いません。ただし、それらのバックアップをクラウドに送り、Rclone を自分でスクリプトせずに端末間で同期したいなら、まさにそれを Hoard が自動化します。公平な比較は [Ludusavi と Hoard](/guides/ludusavi-alternative) をご覧ください。
`,Ee=`---
title: "Como fazer backup dos teus saves automaticamente"
description: "Configura backups na nuvem automáticos e versionados dos teus saves de PC com o Hoard — para que uma falha, uma reinstalação ou um mod com problemas nunca apaguem o teu progresso."
order: 1
updated: 2026-06-28
---

Perder um save significa perder horas de progresso. O Hoard faz backup dos teus saves de PC automaticamente e guarda um histórico completo de versões, para que possas sempre voltar atrás.

## O que o Hoard guarda

O Hoard deteta as pastas de save dos jogos a que jogas e copia-as para a tua própria nuvem — Hoard Cloud ou um servidor que alojes tu mesmo. Cada backup é versionado, por isso as cópias antigas nunca são sobrescritas.

Para encontrar onde cada jogo guarda os saves, o Hoard usa a mesma base de dados comunitária de localizações que alimenta o Ludusavi, por isso a deteção funciona logo para milhares de títulos. A diferença está no que acontece a seguir: em vez de deixar o backup no teu disco, o Hoard versiona-o automaticamente na nuvem.

## Configurar backups automáticos

1. **Descarrega e instala o Hoard** para Windows, macOS ou Linux a partir da página de download.
2. Inicia sessão, ou aponta a app para o teu servidor self-hosted.
3. Abre a **Biblioteca**. O Hoard procura jogos instalados e lista os saves que encontra.
4. Adiciona os jogos que queres proteger. O Hoard localiza cada pasta de save automaticamente; podes adicionar um caminho à mão se um jogo não for detetado.
5. Deixa o **modo automático** ligado. O Hoard vigia as pastas de save e faz backup quando paras de jogar.

A partir daí cada sessão é capturada sem que faças nada.

## Dica: verifica o teu histórico

Abre o separador **Histórico** de um jogo para ver cada backup com data e tamanho. A partir daí podes restaurar qualquer versão anterior com um clique. Os teus saves viajam cifrados, são guardados na UE, e podes exportá-los ou apagá-los quando quiseres.

Já usas uma ferramenta de backup local como o Ludusavi? Podes mantê-la — mas se queres que esses backups cheguem à nuvem e sincronizem entre máquinas sem configurares o Rclone tu mesmo, é exatamente isso que o Hoard automatiza. Vê [Ludusavi vs Hoard](/guides/ludusavi-alternative) para uma comparação justa.
`,Be=`---
title: "如何自动备份游戏存档"
description: "用 Hoard 为你的 PC 游戏存档设置自动、带版本的云端备份——这样崩溃、重装或有问题的 MOD 都永远不会清除你的进度。"
order: 1
updated: 2026-06-28
---

丢失一个存档就意味着丢失数小时的进度。Hoard 会自动备份你的 PC 游戏存档，并保留完整的版本历史，让你随时都能回退。

## Hoard 备份什么

Hoard 会检测你所玩游戏的存档文件夹，并把它们复制到你自己的云端——Hoard Cloud 或你自行托管的服务器。每个备份都带版本，因此旧的副本永远不会被覆盖。

为了找到每款游戏把存档保存在哪里，Hoard 使用与 Ludusavi 相同的社区存档位置数据库，因此对成千上万款游戏的检测开箱即用。区别在于之后发生的事：Hoard 不会把备份留在你的磁盘上，而是自动在云端进行版本管理。

## 设置自动备份

1. 从下载页面**下载并安装 Hoard**（Windows、macOS 或 Linux）。
2. 登录，或将应用指向你自行托管的服务器。
3. 打开**库**。Hoard 会扫描已安装的游戏，并列出找到的存档。
4. 添加你想保护的游戏。Hoard 会自动定位每个存档文件夹；如果某款游戏未被检测到，你可以手动添加路径。
5. 保持**自动模式**开启。Hoard 会监视存档文件夹，并在你停止游戏后进行备份。

从此每一次游戏会话都会被记录，你无需做任何事。

## 提示：查看你的历史

打开某款游戏的**历史**标签，即可看到每个备份及其日期和大小。你可以从那里一键还原任何先前版本。你的存档以加密方式传输，存储在欧盟境内，你随时可以导出或删除。

已经在用像 Ludusavi 这样的本地备份工具？你可以继续用——但如果你希望这些备份进入云端并在多台机器之间同步，而无需自己编写 Rclone 脚本，那正是 Hoard 所自动化的。公平对比请见 [Ludusavi 与 Hoard](/guides/ludusavi-alternative)。
`,Me=`---
title: "Spielstand-Sync im Vergleich: Hoard gegen Ludusavi, Syncthing, OpenSave und die anderen"
description: "Ein ehrlicher Vergleich der Tools, die PC-Spielstände sichern und synchronisieren — Ludusavi, Syncthing, OpenSave, OpenCloudSaves, Game Backup Monitor, Aletheia, SaveSync und Hoard — mit Tabelle und einem Abschnitt darüber, wo Hoard verliert."
order: 4
updated: 2026-08-11
---

Steam Cloud deckt nur Spiele ab, die du bei Steam gekauft hast, und auch nur dann, wenn der Entwickler es eingeschaltet hat. Emulatoren, GOG, Epic, itch.io, Nicht-Steam-Spiele, alles Gemoddete: nichts davon ist dabei. Wer auf mehr als einem Rechner spielt, etwa Desktop und Steam Deck, kopiert am Ende Ordner von Hand und hofft, den neuesten erwischt zu haben.

Mehrere Tools lösen das, und sie tun nicht alle dasselbe. Manche legen lokale Backups an, manche spiegeln Ordner zwischen Geräten, manche laden in eine Cloud. Diese Seite geht sie durch und sagt, worin jedes wirklich gut ist. Hoard ist mein Projekt, deshalb kommt der ehrliche Teil am Schluss: ein Abschnitt darüber, wo Hoard verliert, und eine Tabelle, die man lesen kann, ohne dem Fließtext ein Wort zu glauben.

## Ludusavi

Das bekannteste, und das zu Recht. Ludusavi (von mtkennerly) ist ein kostenloses Open-Source-Backup-Tool mit Oberfläche und CLI, aufgebaut auf dem Community-Manifest der Spielstand-Pfade, das Zehntausende Spiele abdeckt — dasselbe Manifest, das fast alle hier verwenden, Hoard eingeschlossen. Es hält versionierte lokale Backups und kann sie über Rclone in deine eigene Cloud schieben.

**Am besten, wenn:** du lokale Backups, volle Kontrolle und nirgendwo einen Server willst. Die sicherste Wahl dieser Liste, und sie kostet nichts.

**Wo es aufhört:** Sync zwischen Rechnern ist etwas, das du selbst zusammenbaust. Backup planen, Rclone-Remote einrichten, und daran denken, auf dem anderen PC wiederherzustellen, *bevor* du spielst. Das funktioniert, aber nichts hindert dich daran, den letzten Schritt zu vergessen.

## Syncthing

Überhaupt kein Spiele-Tool, sondern ein allgemeiner Peer-to-Peer-Ordnerspiegel, und ein sehr guter. Zeig ihm einen Spielstandordner, und er taucht auf deinen anderen Geräten auf.

**Am besten, wenn:** du es ohnehin betreibst und die Dateien ohne Cloud dazwischen an zwei Orten haben willst.

**Wo es aufhört:** es spiegelt, es fotografiert nicht. Ein kaputter Spielstand erreicht jedes Gerät in Sekunden, genauso schnell wie ein guter. Die Dateiversionierung arbeitet pro Datei und hat keinen Begriff davon, was eine Spielsitzung ist — "zurück auf Dienstagabend" rekonstruierst du also von Hand. Zwei Maschinen, die beide offline gespielt haben, liefern dir Konfliktdateien, keine Zusammenführung.

## OpenSave

Peer-to-peer-Sync, eigens für Spielstände gebaut, in Go, MIT-lizenziert, für Windows, Linux und Steam Deck. Kein Konto, kein Server: Geräte koppeln sich miteinander und synchronisieren über das LAN oder per Raumcode über ein Relay. Jede Änderung wird als Snapshot festgehalten, es gibt Branches für parallele Durchläufe, Konflikte werden über die Sync-Abstammung statt über die Uhrzeit aufgelöst, und übertragen werden nur die geänderten Blöcke. Optional lässt sich zu Drive, Dropbox, OneDrive oder WebDAV spiegeln.

**Am besten, wenn:** du partout kein Konto willst und deine Geräte oft genug gleichzeitig laufen.

**Wo es aufhört:** Peer-to-Peer heißt, der Spielstand lebt nur auf deinen Geräten. Stirbt das Deck mit der einzigen aktuellen Kopie und war die Spiegelung nie eingerichtet, war's das. Für einen Sync müssen beide Geräte laufen, und einen macOS-Build gibt es nicht.

## OpenCloudSaves

Eine plattformübergreifende Oberfläche, die deine Spielstandordner in eine Cloud synchronisiert, für die du ohnehin zahlst — OneDrive, Google Drive, Dropbox, Nextcloud — mit Rclone darunter.

**Am besten, wenn:** du deine Spielstände in einem Speicherkonto haben willst, das du schon hast, mit Oberfläche statt Rclone-Konfigurationsdateien.

**Wo es aufhört:** es gibt keine inhaltsbasierte Deduplizierung. Zehn Kopien eines 2-GB-Spielstands sind 20 GB deines Drive-Kontingents, und Cloud-Laufwerke synchronisieren Dateien, keine Spielsitzungen — du bekommst also zurück, wie der Ordner damals eben aussah.

## Game Backup Monitor

Windows zuerst, und der Ursprung dieses ganzen Genres. GBM wartet auf den Spielprozess und packt den Spielstand beim Beenden mit 7-Zip ein, mit nummerierter Historie.

**Am besten, wenn:** du an einem einzigen Windows-PC sitzt und ein komprimiertes lokales Archiv ohne Nachdenken willst.

**Wo es aufhört:** es ist ein Backup-Tool, kein Sync-Tool. Das Archiv auf eine zweite Maschine zu bekommen, ist dein Problem, und Steam Deck / SteamOS ist nicht sein Zuhause.

## Aletheia

Das jüngste der Runde, AGPL, und es geht genau die Stelle an, die alle anderen halb abdecken: die Launcher. Heroic, itch.io, Lutris, Steam, GOG Galaxy und Xbox, unter Windows, Linux und macOS.

**Am besten, wenn:** deine Bibliothek über Launcher verteilt ist, die andere Tools schlecht erkennen — vor allem Xbox/Game Pass und Heroic.

**Wo es aufhört:** ein junges Projekt mit bewusst engem Zuschnitt. Sichern und Wiederherstellen ist der Funktionsumfang; eine versionierte Cloud steht nicht dahinter.

## SaveSync

Das kommerzielle, auf Steam als Einmalkauf, mit Fokus auf Windows. Sein Kniff: Es zielt gar nicht auf dich-an-zwei-PCs, sondern auf Koop. Spielstände landen in privaten, nicht gelisteten Steam-Workshop-Einträgen, damit ein Freund deine Valheim- oder Factorio-Welt ziehen kann, und LAN-Sync gibt es auch.

**Am besten, wenn:** dein Problem "mein Freund hostet und ich brauche seinen Spielstand" lautet und nicht "meine Spielstände sollen mir folgen".

**Wo es aufhört:** Closed Source, Windows, an Steam als Transportweg gebunden, und eine Liste unterstützter Koop-Spiele statt allem, was du besitzt.

## Eine Anmerkung zu EmuDeck

EmuDeck kommt in diesen Gesprächen auf und ist kein Konkurrent im üblichen Sinn: Es ist ein Installer und Konfigurator für Emulatoren auf dem Steam Deck, und der angebotene Sync ist eine Bequemlichkeit, die an diese Aufgabe angeflanscht ist (Rclone gegen ein Cloud-Laufwerk, nur für Emulator-Spielstände). Es überschneidet sich mit den Tools oben, ohne dasselbe zu sein: EmuDeck richtet deine Emulatoren ein, die Tools hier kümmern sich um die Spielstände der ganzen Bibliothek. Manche betreiben EmuDeck neben einem davon, und das ist ein sinnvolles Setup, kein doppeltes.

## Hoard

Hoard nimmt die Spielsitzung als Einheit. Die Engine läuft als Hintergrunddienst — \`hoardd\`, ohne Fenster, also funktioniert sie im Game Mode von SteamOS —, merkt, dass du aufgehört hast zu spielen, und macht dann den Snapshot, statt mitten im Spiel auf jeden Schreibvorgang zu reagieren.

- **Versionshistorie pro Sitzung.** Jede Sitzung ist eine Version, zu der du zurückkannst, auch nach einem Plattenausfall oder einer Neuinstallation.
- **Deduplizierung über Inhalts-Hashes.** Zehn Versionen eines 2-GB-Spielstands kosten rund 2 GB, nicht 20 GB. Übertragungen sind zstd-komprimiert.
- **SHA-256 beim Hochladen und beim Herunterladen.** Beschädigungen werden erkannt, bevor sie einen guten Spielstand überschreiben können. Nichts wird stillschweigend überschrieben — darum geht es im Kern.
- **Cloud oder selbst gehostet, dasselbe Binary.** Hoard Cloud hat einen kostenlosen Tarif (2 GB, 3 Geräte, volle Historie). Oder du betreibst \`hoard-server\` selbst per Docker Compose gegen beliebigen S3-kompatiblen Speicher — MinIO, Garage, Backblaze B2 — ohne Konto und ohne Kontingent. AGPL-3.0.
- **Windows, Linux, macOS**, dazu eine headless CLI für ein Steam Deck oder einen Server.
- **Emulatoren in der Beta:** PCSX2, RPCS3, Dolphin, Cemu, Ryujinx, RetroArch, DuckStation, PPSSPP und weitere als Voreinstellungen.

## Das Detail, an dem Steam Deck ↔ PC hängt

Gut zu wissen, egal welches Tool du nimmst. Der Cloud-Spielstand eines Steam-Spiels liegt in \`<AppID>/remote/\`, und der Ordner *darüber* enthält \`remotecache.vdf\`, Erfolgsstände, Statistiken und Spielzeitzähler — alles Dinge, die sich zwischen Deck und Desktop berechtigterweise unterscheiden.

Synchronisiere den übergeordneten Ordner, und du hast einen Dauerkonflikt zwischen zwei Maschinen, die sich über keinen einzigen Spielstand uneinig waren. Hoard verfolgt \`remote/\`, nicht den Elternordner. Jedem Tool, dem du einen Ordner von Hand zuweist, kann man dasselbe beibringen — und es ist das Erste, was man prüft, wenn ein Sync-Setup ohne sichtbaren Grund ständig Konflikte meldet.

## Wo Hoard verliert

- **Es will einen Server.** Cloud-Konto oder eigene Kiste, so oder so ist es Infrastruktur, und OpenSave oder Ludusavi brauchen keine.
- **Emulator-Unterstützung ist Beta.** Portable Installationen und die Eigenheiten einzelner Emulatoren erwischen es noch, und Aletheia und OpenSave decken manche Launcher- und Emulator-Sonderfälle heute besser ab.
- **macOS ist auf echter Hardware kaum getestet.** Es baut und läuft, aber niemand hat monatelang darauf gelebt.
- **Es ist jung.** Ludusavi und Game Backup Monitor haben Jahre an Fehlerberichten hinter sich. Hoard nicht, und das zählt bei etwas, das einen 200-Stunden-Spielstand hütet.
- **Es macht kein Koop-Teilen.** Wenn du einem Freund eine Welt geben willst, ist SaveSync dafür gebaut und Hoard nicht.

## Die Tabelle

| Tool | Automatischer Sync zwischen Geräten | Wo die Spielstände liegen | Historie | Plattformen | Lizenz |
|---|---|---|---|---|---|
| **Hoard** | Ja, pro Spielsitzung | Hoard Cloud oder eigener Server (S3-kompatibel) | Versioniert pro Sitzung, dedupliziert | Win · Linux · macOS · Deck | AGPL-3.0, kostenloser Tarif |
| **Ludusavi** | Manuell, oder Rclone, das du einrichtest | Lokal, plus dein Rclone-Remote | Versionierte lokale Backups | Win · Linux · macOS | Kostenlos, Open Source |
| **Syncthing** | Ja, fortlaufender Spiegel | Nur deine Geräte | Versionierung pro Datei | Alles | Kostenlos, Open Source |
| **OpenSave** | Ja, peer-to-peer | Deine Geräte, optionale Cloud-Spiegelung | Snapshots und Branches | Win · Linux · Deck | MIT |
| **OpenCloudSaves** | Ja, über dein Cloud-Laufwerk | OneDrive / Drive / Dropbox / Nextcloud | Was das Laufwerk aufhebt | Win · Linux · macOS | Kostenlos, Open Source |
| **Game Backup Monitor** | Nein | Lokale 7-Zip-Archive | Nummerierte Backups | Windows | Kostenlos, Open Source |
| **Aletheia** | Sichern und Wiederherstellen pro Launcher | Dein Speicher | Backups | Win · Linux · macOS | AGPL-3.0 |
| **SaveSync** | Ja, auch mit Freunden | Private Steam-Workshop-Einträge | Laut App | Windows | Kostenpflichtig, Closed Source |

## Also welches

Willst du eine Maschine gesichert haben und sonst nichts, nimm Ludusavi oder Game Backup Monitor. Willst du unter keinen Umständen ein Konto und laufen deine Geräte meist gleichzeitig, OpenSave. Sollen die Spielstände in einem Drive-Ordner landen, für den du schon zahlst, OpenCloudSaves. Teilst du eine Koop-Welt mit Freunden, SaveSync.

Willst du, dass Backup *und* Sync zwischen PCs und einem Steam Deck einfach passieren, mit einer Version pro Sitzung, zu der du zurückkannst, und der Option, das Ganze selbst zu hosten, dann ist Hoard dafür da. [Lade es herunter](/download) oder lies vorher, [wie man es mit Docker selbst hostet](/guides/self-host-hoard). Es gibt außerdem einen [ausführlichen Ludusavi-Vergleich](/guides/ludusavi-alternative), falls du genau damit abwägst.
`,$e=`---
title: "Game save sync compared: Hoard vs Ludusavi, Syncthing, OpenSave and the rest"
description: "An honest comparison of the tools that back up and sync PC game saves — Ludusavi, Syncthing, OpenSave, OpenCloudSaves, Game Backup Monitor, Aletheia, SaveSync and Hoard — with a table, and a section on where Hoard loses."
order: 4
updated: 2026-08-11
---

Steam Cloud only covers games you bought on Steam, and only when the developer bothered to switch it on. Emulators, GOG, Epic, itch.io, non-Steam games, anything modded — none of that is covered. If you play on more than one machine, a desktop and a Steam Deck say, you end up copying folders by hand and hoping you grabbed the newest one.

Several tools fix this, and they don't all do the same thing. Some make local backups, some mirror folders between devices, some upload to a cloud. This page goes through them and says what each one is genuinely best at. Hoard is my project, so the honest part comes at the end: a section on where Hoard loses, and a table you can read without trusting a word of the prose.

## Ludusavi

The best-known one, and deservedly so. Ludusavi (by mtkennerly) is a free, open-source backup tool with a GUI and a CLI, and it's built on the community save-location manifest that covers tens of thousands of games — the same manifest most of the tools here use, Hoard included. It keeps versioned local backups and can push them to your own cloud through Rclone.

**Best if:** you want local backups, full control, and no server anywhere. It's the safest default on this list and costs nothing.

**Where it stops:** cross-machine sync is a thing you assemble. Schedule a backup, configure an Rclone remote, remember to restore on the other PC *before* you play. It works, but nothing stops you forgetting the last step.

## Syncthing

Not a game tool at all — a general-purpose, peer-to-peer folder mirror, and a very good one. Point it at a save folder and it appears on your other devices.

**Best if:** you already run it and you want files in two places with no cloud in between.

**Where it stops:** it mirrors, it doesn't snapshot. A corrupted save reaches every device in seconds, exactly as fast as a good one. Its file versioning is per-file, with no idea what a play session is, so "roll back to how it was on Tuesday night" is something you reconstruct by hand. Two machines that both played offline give you conflict files, not a merge.

## OpenSave

Peer-to-peer sync built specifically for saves, in Go, MIT licensed, for Windows, Linux and Steam Deck. No account, no server: devices pair with each other and sync over the LAN or through a relay room code. It snapshots every change, has branches for parallel playthroughs, resolves conflicts by sync lineage rather than clock timestamps, and transfers only changed blocks. It can optionally mirror to Drive, Dropbox, OneDrive or WebDAV.

**Best if:** you refuse to have an account, and your devices are on together often enough to actually meet.

**Where it stops:** peer-to-peer means the save lives only on your devices. If the Deck holding the only recent copy dies and the mirror was never configured, that's it. Both devices have to be running for a sync to happen, and there's no macOS build.

## OpenCloudSaves

A cross-platform GUI that syncs your save folders into a cloud you already pay for — OneDrive, Google Drive, Dropbox, Nextcloud — using Rclone underneath.

**Best if:** you want your saves in a storage account you already have, with a UI instead of Rclone config files.

**Where it stops:** there's no content-level deduplication. Ten copies of a 2 GB save is 20 GB of your Drive quota, and cloud drives sync files, not play sessions, so what you get back is whatever the folder looked like at the time.

## Game Backup Monitor

Windows-first, and the original of this whole genre. GBM watches for a game process, and when you quit, it compresses the save with 7-Zip and keeps a numbered history.

**Best if:** you're on one Windows PC and want a compressed local archive with zero thinking.

**Where it stops:** it's a backup tool, not a sync tool. Getting the archive onto a second machine is your problem, and Steam Deck / SteamOS is not its home turf.

## Aletheia

The newest of the bunch, AGPL, and it goes after the part everyone else half-covers: launchers. Heroic, itch.io, Lutris, Steam, GOG Galaxy and Xbox, across Windows, Linux and macOS.

**Best if:** your library is spread across launchers that other tools detect badly — especially Xbox/Game Pass and Heroic.

**Where it stops:** it's a young project with a deliberately narrow scope. Backup and restore is the feature set; there's no versioned cloud behind it.

## SaveSync

The commercial one, sold on Steam as a one-time purchase, Windows-focused. Its trick is that it isn't really aimed at you-on-two-PCs — it's aimed at co-op. Saves go into private, unlisted Steam Workshop entries so a friend can pull your Valheim or Factorio world, and there's LAN sync too.

**Best if:** the problem you're solving is "my friend hosts and I need their save", not "my saves follow me".

**Where it stops:** closed source, Windows, tied to Steam as the transport, and a set of supported co-op games rather than everything you own.

## A note on EmuDeck

EmuDeck comes up in these conversations, and it isn't a competitor in the normal sense — it's an emulator installer and configurator for Steam Deck, and the sync it offers is a convenience bolted onto that job (Rclone against a cloud drive, for emulator saves only). It overlaps with the tools above without being the same kind of thing: EmuDeck sets your emulators up, the tools here look after saves for the whole library. People do run EmuDeck alongside one of these, and that's a sensible setup, not a redundant one.

## Hoard

Hoard treats a play session as the unit. The engine runs as a background service — \`hoardd\`, no window, so it works in SteamOS game mode — notices you stopped playing, and takes a snapshot then, instead of reacting to every file write mid-game.

- **Version history per session.** Every session is a version you can roll back to, including after a disk failure or a fresh install.
- **Content-hash deduplication.** Ten versions of a 2 GB save cost about 2 GB, not 20 GB. Transfers are zstd-compressed.
- **SHA-256 on the way up and on the way down.** Corruption is caught before it can overwrite a good save. Nothing is ever silently overwritten — that's the whole design.
- **Cloud or self-hosted, same binary.** Hoard Cloud has a free tier (2 GB, 3 devices, full history). Or run \`hoard-server\` yourself with Docker Compose against any S3-compatible storage — MinIO, Garage, Backblaze B2 — with no account and no quota. AGPL-3.0.
- **Windows, Linux, macOS**, plus a headless CLI for a Steam Deck or a server.
- **Emulators in beta:** PCSX2, RPCS3, Dolphin, Cemu, Ryujinx, RetroArch, DuckStation, PPSSPP and others as presets.

## The detail that decides Steam Deck ↔ PC sync

Worth knowing whichever tool you pick. A Steam game's cloud save lives in \`<AppID>/remote/\`, and the folder *above* it holds \`remotecache.vdf\`, achievement state, stats and playtime counters — all of which legitimately differ between your Deck and your desktop.

Sync the parent folder and you get a permanent conflict between two machines that never disagreed about a single save. Hoard tracks \`remote/\`, not the parent. Any tool pointed at a folder by hand can be told to do the same, and it's the first thing to check when a sync setup keeps flagging conflicts for no visible reason.

## Where Hoard loses

- **It wants a server.** Cloud account or your own box — either way it's infrastructure, and OpenSave or Ludusavi need none.
- **Emulator support is beta.** Portable installs and per-emulator quirks still catch it out; Aletheia and OpenSave cover some launcher/emulator edge cases better today.
- **macOS is barely tested on real hardware.** It builds and it runs, but nobody has lived on it for months.
- **It's young.** Ludusavi and Game Backup Monitor have years of bug reports behind them. Hoard doesn't, and that matters for something guarding a 200-hour save.
- **It doesn't do co-op sharing.** If you want to hand a world to a friend, SaveSync is built for that and Hoard isn't.

## The table

| Tool | Automatic sync between devices | Where saves live | History | Platforms | Licence |
|---|---|---|---|---|---|
| **Hoard** | Yes, per play session | Hoard Cloud or your own server (S3-compatible) | Versioned per session, deduplicated | Win · Linux · macOS · Deck | AGPL-3.0, free tier |
| **Ludusavi** | Manual, or Rclone that you wire up | Local, plus your Rclone remote | Versioned local backups | Win · Linux · macOS | Free, open source |
| **Syncthing** | Yes, continuous mirror | Your devices only | Per-file versioning | Everything | Free, open source |
| **OpenSave** | Yes, peer-to-peer | Your devices, optional cloud mirror | Snapshots and branches | Win · Linux · Deck | MIT |
| **OpenCloudSaves** | Yes, via your cloud drive | OneDrive / Drive / Dropbox / Nextcloud | Whatever the drive keeps | Win · Linux · macOS | Free, open source |
| **Game Backup Monitor** | No | Local 7-Zip archives | Numbered backups | Windows | Free, open source |
| **Aletheia** | Backup and restore per launcher | Your storage | Backups | Win · Linux · macOS | AGPL-3.0 |
| **SaveSync** | Yes, and with friends | Private Steam Workshop entries | Per the app | Windows | Paid, closed source |

## So which one

If you want one machine backed up and nothing else, take Ludusavi or Game Backup Monitor. If you want no account under any circumstances and your devices are usually on together, OpenSave. If your saves should be in a Drive folder you already pay for, OpenCloudSaves. If you're sharing a co-op world with friends, SaveSync.

If you want backups *and* automatic sync across PCs and a Steam Deck to just happen, with a version per session you can roll back to and the option to self-host the whole thing, that's what Hoard is for. [Download it](/download), or read [how to self-host it with Docker](/guides/self-host-hoard) first. There's also a longer [Ludusavi comparison](/guides/ludusavi-alternative) if that's the one you're weighing it against.
`,Ve=`---
title: "Comparativa de sincronización de partidas: Hoard frente a Ludusavi, Syncthing, OpenSave y las demás"
description: "Comparativa honesta de las herramientas que hacen copia y sincronizan partidas de PC — Ludusavi, Syncthing, OpenSave, OpenCloudSaves, Game Backup Monitor, Aletheia, SaveSync y Hoard — con tabla y un apartado sobre dónde pierde Hoard."
order: 4
updated: 2026-08-11
---

Steam Cloud solo cubre los juegos que compraste en Steam, y solo cuando el desarrollador se molestó en activarlo. Emuladores, GOG, Epic, itch.io, juegos que no son de Steam, cualquier cosa con mods: nada de eso entra. Si juegas en más de un equipo, un sobremesa y una Steam Deck por ejemplo, acabas copiando carpetas a mano y confiando en haber cogido la más reciente.

Hay varias herramientas que resuelven esto y no todas hacen lo mismo. Unas hacen copias locales, otras replican carpetas entre dispositivos, otras suben a una nube. Esta página las repasa y dice en qué es buena de verdad cada una. Hoard es mi proyecto, así que la parte honesta va al final: un apartado sobre dónde pierde Hoard, y una tabla que puedes leer sin fiarte de una sola línea del texto.

## Ludusavi

La más conocida, y con razón. Ludusavi (de mtkennerly) es una herramienta de copia gratuita y open source, con interfaz y con CLI, construida sobre el manifiesto comunitario de ubicaciones de partidas que cubre decenas de miles de juegos: el mismo manifiesto que usan casi todas las de esta lista, Hoard incluido. Guarda copias locales versionadas y puede subirlas a una nube tuya configurando Rclone.

**Mejor si:** quieres copias locales, control total y ningún servidor en ninguna parte. Es la opción más segura de la lista y no cuesta nada.

**Dónde se queda:** la sincronización entre equipos es algo que montas tú. Programas una copia, configuras un remoto de Rclone y te acuerdas de restaurar en el otro PC *antes* de jugar. Funciona, pero nada te impide olvidarte del último paso.

## Syncthing

No es una herramienta de juegos: es un espejo de carpetas peer-to-peer de propósito general, y muy bueno. Le señalas una carpeta de partidas y aparece en tus otros dispositivos.

**Mejor si:** ya lo tienes montado y quieres los ficheros en dos sitios sin nube por medio.

**Dónde se queda:** replica, no fotografía. Una partida corrupta llega a todos los dispositivos en segundos, exactamente igual de rápido que una buena. Su versionado es por fichero, sin noción de qué es una sesión de juego, así que "volver a como estaba el martes por la noche" es algo que reconstruyes a mano. Dos máquinas que jugaron sin conexión te dan ficheros de conflicto, no una fusión.

## OpenSave

Sincronización peer-to-peer hecha específicamente para partidas, en Go, con licencia MIT, para Windows, Linux y Steam Deck. Sin cuenta y sin servidor: los dispositivos se emparejan entre ellos y sincronizan por la red local o a través de un código de sala en un relay. Fotografía cada cambio, tiene ramas para partidas paralelas, resuelve conflictos por linaje de sincronización en vez de por reloj, y transfiere solo los bloques que cambiaron. Opcionalmente puede replicar a Drive, Dropbox, OneDrive o WebDAV.

**Mejor si:** te niegas a tener una cuenta y tus dispositivos coinciden encendidos lo bastante a menudo.

**Dónde se queda:** peer-to-peer significa que la partida vive solo en tus dispositivos. Si muere la Deck que tenía la única copia reciente y nunca configuraste la réplica, se acabó. Los dos dispositivos tienen que estar en marcha para que haya sincronización, y no hay versión para macOS.

## OpenCloudSaves

Una interfaz multiplataforma que sincroniza tus carpetas de partidas contra una nube que ya pagas — OneDrive, Google Drive, Dropbox, Nextcloud — usando Rclone por debajo.

**Mejor si:** quieres tus partidas en una cuenta de almacenamiento que ya tienes, con una interfaz en vez de ficheros de configuración de Rclone.

**Dónde se queda:** no hay deduplicación por contenido. Diez copias de una partida de 2 GB son 20 GB de tu cuota de Drive, y las nubes de disco sincronizan ficheros, no sesiones de juego, así que lo que recuperas es como estuviera la carpeta en ese momento.

## Game Backup Monitor

Primero Windows, y el original de todo este género. GBM vigila el proceso del juego y, cuando sales, comprime la partida con 7-Zip y guarda un historial numerado.

**Mejor si:** estás en un solo PC con Windows y quieres un archivo comprimido local sin pensar en nada.

**Dónde se queda:** es una herramienta de copia, no de sincronización. Llevar el archivo a una segunda máquina es cosa tuya, y Steam Deck / SteamOS no es su terreno.

## Aletheia

La más nueva del grupo, AGPL, y va justo a la parte que las demás cubren a medias: los lanzadores. Heroic, itch.io, Lutris, Steam, GOG Galaxy y Xbox, en Windows, Linux y macOS.

**Mejor si:** tu biblioteca está repartida entre lanzadores que otras herramientas detectan mal, sobre todo Xbox/Game Pass y Heroic.

**Dónde se queda:** es un proyecto joven con un alcance deliberadamente estrecho. Copiar y restaurar es todo el conjunto de funciones; no hay una nube versionada detrás.

## SaveSync

La comercial, se vende en Steam como pago único y está centrada en Windows. Su truco es que no apunta a ti-en-dos-PC, sino al cooperativo: las partidas van a entradas privadas y no listadas del Steam Workshop para que un amigo pueda bajarse tu mundo de Valheim o de Factorio, y además hay sincronización por red local.

**Mejor si:** el problema que resuelves es "mi amigo hospeda y necesito su partida", no "que mis partidas me sigan".

**Dónde se queda:** código cerrado, Windows, atado a Steam como transporte, y una lista de juegos cooperativos soportados en vez de todo lo que tengas.

## Un apunte sobre EmuDeck

EmuDeck sale en estas conversaciones y no es un competidor en el sentido normal: es un instalador y configurador de emuladores para Steam Deck, y la sincronización que ofrece es una comodidad añadida a ese trabajo (Rclone contra una nube de disco, solo para partidas de emulador). Se solapa con las herramientas de arriba sin ser lo mismo: EmuDeck te deja los emuladores montados, y las de aquí cuidan las partidas de toda la biblioteca. Hay gente que usa EmuDeck junto a una de estas, y es un montaje sensato, no redundante.

## Hoard

Hoard toma la sesión de juego como unidad. El motor corre como servicio en segundo plano — \`hoardd\`, sin ventana, así que funciona en el modo juego de SteamOS —, se entera de que has dejado de jugar y hace la instantánea entonces, en vez de reaccionar a cada escritura de fichero en mitad de la partida.

- **Historial versionado por sesión.** Cada sesión es una versión a la que puedes volver, incluso después de un fallo de disco o una instalación limpia.
- **Deduplicación por hash de contenido.** Diez versiones de una partida de 2 GB ocupan unos 2 GB, no 20 GB. Las transferencias van comprimidas con zstd.
- **SHA-256 al subir y al bajar.** La corrupción se detecta antes de que pueda sobrescribir una partida buena. Nada se sobrescribe en silencio: ese es todo el diseño.
- **Nube o autoalojado, el mismo binario.** Hoard Cloud tiene plan gratuito (2 GB, 3 dispositivos, historial completo). O levantas \`hoard-server\` tú mismo con Docker Compose contra cualquier almacenamiento compatible con S3 — MinIO, Garage, Backblaze B2 — sin cuenta y sin cuota. AGPL-3.0.
- **Windows, Linux y macOS**, más una CLI sin interfaz para una Steam Deck o un servidor.
- **Emuladores en beta:** PCSX2, RPCS3, Dolphin, Cemu, Ryujinx, RetroArch, DuckStation, PPSSPP y otros como preajustes.

## El detalle que decide la sincronización Steam Deck ↔ PC

Conviene saberlo elijas la herramienta que elijas. La partida en la nube de un juego de Steam vive en \`<AppID>/remote/\`, y la carpeta de *encima* guarda \`remotecache.vdf\`, el estado de logros, estadísticas y contadores de horas jugadas, cosas que legítimamente son distintas entre tu Deck y tu sobremesa.

Sincroniza la carpeta padre y tendrás un conflicto permanente entre dos máquinas que nunca discreparon sobre una sola partida. Hoard rastrea \`remote/\`, no la carpeta padre. A cualquier herramienta a la que le señales una carpeta a mano se le puede decir lo mismo, y es lo primero que hay que mirar cuando un montaje de sincronización marca conflictos sin motivo aparente.

## Dónde pierde Hoard

- **Quiere un servidor.** Cuenta en la nube o máquina tuya, en cualquier caso es infraestructura, y OpenSave o Ludusavi no necesitan ninguna.
- **El soporte de emuladores está en beta.** Las instalaciones portables y las manías de cada emulador todavía lo pillan, y hoy Aletheia y OpenSave cubren mejor algunos casos raros de lanzadores y emuladores.
- **macOS apenas está probado en hardware real.** Compila y funciona, pero nadie ha vivido ahí durante meses.
- **Es joven.** Ludusavi y Game Backup Monitor llevan años de informes de fallos a la espalda. Hoard no, y eso importa en algo que custodia una partida de 200 horas.
- **No hace cooperativo.** Si quieres pasarle un mundo a un amigo, SaveSync está hecho para eso y Hoard no.

## La tabla

| Herramienta | Sincronización automática entre dispositivos | Dónde viven las partidas | Historial | Plataformas | Licencia |
|---|---|---|---|---|---|
| **Hoard** | Sí, por sesión de juego | Hoard Cloud o tu propio servidor (compatible con S3) | Versionado por sesión, deduplicado | Win · Linux · macOS · Deck | AGPL-3.0, plan gratuito |
| **Ludusavi** | Manual, o Rclone que montas tú | Local, más tu remoto de Rclone | Copias locales versionadas | Win · Linux · macOS | Gratis, open source |
| **Syncthing** | Sí, espejo continuo | Solo tus dispositivos | Versionado por fichero | Todo | Gratis, open source |
| **OpenSave** | Sí, peer-to-peer | Tus dispositivos, réplica opcional en nube | Instantáneas y ramas | Win · Linux · Deck | MIT |
| **OpenCloudSaves** | Sí, vía tu nube de disco | OneDrive / Drive / Dropbox / Nextcloud | Lo que guarde la nube | Win · Linux · macOS | Gratis, open source |
| **Game Backup Monitor** | No | Archivos 7-Zip locales | Copias numeradas | Windows | Gratis, open source |
| **Aletheia** | Copia y restauración por lanzador | Tu almacenamiento | Copias | Win · Linux · macOS | AGPL-3.0 |
| **SaveSync** | Sí, y con amigos | Entradas privadas del Steam Workshop | Según la app | Windows | De pago, código cerrado |

## Entonces cuál

Si quieres una sola máquina respaldada y nada más, coge Ludusavi o Game Backup Monitor. Si no quieres una cuenta bajo ningún concepto y tus dispositivos suelen estar encendidos a la vez, OpenSave. Si tus partidas deben acabar en una carpeta de Drive que ya pagas, OpenCloudSaves. Si compartes un mundo cooperativo con amigos, SaveSync.

Si lo que quieres es que la copia *y* la sincronización entre PC y una Steam Deck pasen solas, con una versión por sesión a la que volver y la opción de autoalojarlo todo, para eso está Hoard. [Descárgalo](/download), o léete antes [cómo autoalojarlo con Docker](/guides/self-host-hoard). También hay una [comparativa larga con Ludusavi](/guides/ludusavi-alternative) si es esa la que estás sopesando.
`,Ne=`---
title: "Comparatif de synchronisation des sauvegardes : Hoard face à Ludusavi, Syncthing, OpenSave et les autres"
description: "Comparatif honnête des outils qui sauvegardent et synchronisent les parties PC — Ludusavi, Syncthing, OpenSave, OpenCloudSaves, Game Backup Monitor, Aletheia, SaveSync et Hoard — avec un tableau et une section sur les points faibles de Hoard."
order: 4
updated: 2026-08-11
---

Steam Cloud ne couvre que les jeux achetés sur Steam, et seulement quand le développeur a pris la peine de l'activer. Émulateurs, GOG, Epic, itch.io, jeux hors Steam, tout ce qui est moddé : rien de tout ça n'est couvert. Si vous jouez sur plusieurs machines, un fixe et un Steam Deck par exemple, vous finissez par copier des dossiers à la main en espérant avoir pris le plus récent.

Plusieurs outils règlent le problème, et ils ne font pas tous la même chose. Certains font des sauvegardes locales, d'autres répliquent des dossiers entre appareils, d'autres envoient vers un cloud. Cette page les passe en revue et dit ce que chacun fait vraiment bien. Hoard est mon projet, donc la partie honnête arrive à la fin : une section sur les points faibles de Hoard, et un tableau lisible sans croire un mot du texte.

## Ludusavi

Le plus connu, et à juste titre. Ludusavi (de mtkennerly) est un outil de sauvegarde gratuit et open source, avec interface et ligne de commande, bâti sur le manifeste communautaire des emplacements de sauvegardes qui couvre des dizaines de milliers de jeux — le même manifeste qu'utilisent presque tous les outils d'ici, Hoard compris. Il conserve des sauvegardes locales versionnées et peut les pousser vers votre propre cloud via Rclone.

**Le meilleur si :** vous voulez des sauvegardes locales, le contrôle total et aucun serveur nulle part. C'est le choix le plus sûr de la liste, et il est gratuit.

**Là où il s'arrête :** la synchronisation entre machines, c'est vous qui l'assemblez. Planifier une sauvegarde, configurer un remote Rclone, puis penser à restaurer sur l'autre PC *avant* de jouer. Ça marche, mais rien ne vous empêche d'oublier la dernière étape.

## Syncthing

Pas du tout un outil de jeu : un miroir de dossiers pair-à-pair généraliste, et très bon. Vous lui désignez un dossier de sauvegardes et il apparaît sur vos autres appareils.

**Le meilleur si :** vous l'utilisez déjà et vous voulez les fichiers à deux endroits sans cloud entre les deux.

**Là où il s'arrête :** il réplique, il ne photographie pas. Une sauvegarde corrompue atteint tous les appareils en quelques secondes, exactement aussi vite qu'une bonne. Son versionnage est par fichier, sans notion de session de jeu, donc « revenir à mardi soir » se reconstruit à la main. Deux machines qui ont joué hors ligne vous donnent des fichiers de conflit, pas une fusion.

## OpenSave

Synchronisation pair-à-pair conçue spécifiquement pour les sauvegardes, en Go, sous licence MIT, pour Windows, Linux et Steam Deck. Pas de compte, pas de serveur : les appareils s'appairent entre eux et se synchronisent en réseau local ou via un code de salon sur un relais. Chaque changement devient un instantané, il y a des branches pour les parties parallèles, les conflits se résolvent par lignage de synchronisation plutôt que par horloge, et seuls les blocs modifiés circulent. Il peut, en option, répliquer vers Drive, Dropbox, OneDrive ou WebDAV.

**Le meilleur si :** vous refusez d'avoir un compte et vos appareils sont allumés en même temps assez souvent.

**Là où il s'arrête :** pair-à-pair veut dire que la sauvegarde ne vit que sur vos appareils. Si le Deck qui détenait la seule copie récente meurt et que la réplication n'a jamais été configurée, c'est terminé. Les deux appareils doivent tourner pour qu'une synchronisation ait lieu, et il n'y a pas de version macOS.

## OpenCloudSaves

Une interface multiplateforme qui synchronise vos dossiers de sauvegardes vers un cloud que vous payez déjà — OneDrive, Google Drive, Dropbox, Nextcloud — avec Rclone en dessous.

**Le meilleur si :** vous voulez vos sauvegardes dans un espace de stockage que vous avez déjà, avec une interface plutôt que des fichiers de configuration Rclone.

**Là où il s'arrête :** pas de déduplication au niveau du contenu. Dix copies d'une sauvegarde de 2 Go, ce sont 20 Go de votre quota Drive, et les clouds de fichiers synchronisent des fichiers, pas des sessions de jeu : vous récupérez l'état du dossier à un instant donné, rien de plus.

## Game Backup Monitor

D'abord Windows, et l'ancêtre de tout ce genre. GBM guette le processus du jeu et, à la fermeture, compresse la sauvegarde avec 7-Zip en gardant un historique numéroté.

**Le meilleur si :** vous êtes sur un seul PC Windows et voulez une archive locale compressée sans y penser.

**Là où il s'arrête :** c'est un outil de sauvegarde, pas de synchronisation. Amener l'archive sur une deuxième machine, c'est votre affaire, et Steam Deck / SteamOS n'est pas son terrain.

## Aletheia

Le plus récent du lot, sous AGPL, et il attaque précisément ce que les autres couvrent à moitié : les lanceurs. Heroic, itch.io, Lutris, Steam, GOG Galaxy et Xbox, sous Windows, Linux et macOS.

**Le meilleur si :** votre bibliothèque est éparpillée sur des lanceurs que les autres outils détectent mal, en particulier Xbox/Game Pass et Heroic.

**Là où il s'arrête :** projet jeune, au périmètre volontairement étroit. Sauvegarder et restaurer, c'est tout ; il n'y a pas de cloud versionné derrière.

## SaveSync

Le commercial, vendu sur Steam en achat unique, orienté Windows. Sa particularité : il ne vise pas vous-sur-deux-PC mais le coop. Les sauvegardes partent dans des entrées privées et non listées du Steam Workshop pour qu'un ami récupère votre monde Valheim ou Factorio, et il y a aussi une synchronisation en réseau local.

**Le meilleur si :** votre problème est « mon ami héberge et il me faut sa sauvegarde », pas « que mes sauvegardes me suivent ».

**Là où il s'arrête :** code fermé, Windows, dépendant de Steam comme transport, et une liste de jeux coop pris en charge plutôt que tout ce que vous possédez.

## Une note sur EmuDeck

EmuDeck revient dans ces discussions, et ce n'est pas un concurrent au sens habituel : c'est un installateur et configurateur d'émulateurs pour Steam Deck, et la synchronisation qu'il propose est un confort greffé sur cette mission (Rclone vers un cloud de fichiers, pour les sauvegardes d'émulateurs uniquement). Il recoupe les outils ci-dessus sans être de la même nature : EmuDeck installe vos émulateurs, les outils d'ici veillent sur les sauvegardes de toute la bibliothèque. Beaucoup font tourner EmuDeck à côté de l'un d'eux, et c'est une configuration sensée, pas une redondance.

## Hoard

Hoard prend la session de jeu comme unité. Le moteur tourne en service d'arrière-plan — \`hoardd\`, sans fenêtre, donc il fonctionne en mode jeu de SteamOS —, remarque que vous avez arrêté de jouer, et prend l'instantané à ce moment-là plutôt que de réagir à chaque écriture pendant la partie.

- **Historique versionné par session.** Chaque session est une version vers laquelle revenir, même après une panne de disque ou une réinstallation.
- **Déduplication par empreinte de contenu.** Dix versions d'une sauvegarde de 2 Go coûtent environ 2 Go, pas 20 Go. Les transferts sont compressés en zstd.
- **SHA-256 à la montée et à la descente.** La corruption est détectée avant de pouvoir écraser une bonne sauvegarde. Rien n'est jamais écrasé en silence : c'est tout le principe.
- **Cloud ou auto-hébergé, le même binaire.** Hoard Cloud a une offre gratuite (2 Go, 3 appareils, historique complet). Ou vous lancez \`hoard-server\` vous-même avec Docker Compose sur n'importe quel stockage compatible S3 — MinIO, Garage, Backblaze B2 — sans compte ni quota. AGPL-3.0.
- **Windows, Linux, macOS**, plus une CLI sans interface pour un Steam Deck ou un serveur.
- **Émulateurs en bêta :** PCSX2, RPCS3, Dolphin, Cemu, Ryujinx, RetroArch, DuckStation, PPSSPP et d'autres en préréglages.

## Le détail qui décide de la synchro Steam Deck ↔ PC

Bon à savoir quel que soit l'outil choisi. La sauvegarde cloud d'un jeu Steam vit dans \`<AppID>/remote/\`, et le dossier *au-dessus* contient \`remotecache.vdf\`, l'état des succès, les statistiques et les compteurs de temps de jeu — autant de choses qui diffèrent légitimement entre votre Deck et votre fixe.

Synchronisez le dossier parent et vous obtenez un conflit permanent entre deux machines qui n'ont jamais été en désaccord sur une seule sauvegarde. Hoard suit \`remote/\`, pas le dossier parent. N'importe quel outil auquel vous désignez un dossier à la main peut faire pareil, et c'est la première chose à vérifier quand une configuration de synchronisation signale des conflits sans raison visible.

## Là où Hoard perd

- **Il veut un serveur.** Compte cloud ou machine à vous, dans les deux cas c'est de l'infrastructure, alors qu'OpenSave ou Ludusavi n'en demandent aucune.
- **La prise en charge des émulateurs est en bêta.** Les installations portables et les manies de chaque émulateur le piègent encore, et Aletheia comme OpenSave couvrent aujourd'hui mieux certains cas particuliers de lanceurs et d'émulateurs.
- **macOS est à peine testé sur du matériel réel.** Ça compile et ça tourne, mais personne n'y a vécu pendant des mois.
- **C'est jeune.** Ludusavi et Game Backup Monitor ont des années de rapports de bugs derrière eux. Pas Hoard, et ça compte pour un logiciel qui garde une partie de 200 heures.
- **Il ne fait pas le partage coop.** Pour passer un monde à un ami, SaveSync est fait pour ça, Hoard non.

## Le tableau

| Outil | Synchro automatique entre appareils | Où vivent les sauvegardes | Historique | Plateformes | Licence |
|---|---|---|---|---|---|
| **Hoard** | Oui, par session de jeu | Hoard Cloud ou votre serveur (compatible S3) | Versionné par session, dédupliqué | Win · Linux · macOS · Deck | AGPL-3.0, offre gratuite |
| **Ludusavi** | Manuelle, ou Rclone que vous montez | Local, plus votre remote Rclone | Sauvegardes locales versionnées | Win · Linux · macOS | Gratuit, open source |
| **Syncthing** | Oui, miroir continu | Vos appareils seulement | Versionnage par fichier | Tout | Gratuit, open source |
| **OpenSave** | Oui, pair-à-pair | Vos appareils, réplication cloud optionnelle | Instantanés et branches | Win · Linux · Deck | MIT |
| **OpenCloudSaves** | Oui, via votre cloud | OneDrive / Drive / Dropbox / Nextcloud | Ce que garde le cloud | Win · Linux · macOS | Gratuit, open source |
| **Game Backup Monitor** | Non | Archives 7-Zip locales | Sauvegardes numérotées | Windows | Gratuit, open source |
| **Aletheia** | Sauvegarde et restauration par lanceur | Votre stockage | Sauvegardes | Win · Linux · macOS | AGPL-3.0 |
| **SaveSync** | Oui, et avec des amis | Entrées privées du Steam Workshop | Selon l'application | Windows | Payant, code fermé |

## Alors lequel

Si vous voulez une seule machine sauvegardée et rien d'autre, prenez Ludusavi ou Game Backup Monitor. Si vous refusez tout compte et que vos appareils sont généralement allumés ensemble, OpenSave. Si vos sauvegardes doivent atterrir dans un dossier Drive que vous payez déjà, OpenCloudSaves. Si vous partagez un monde coop avec des amis, SaveSync.

Si vous voulez que la sauvegarde *et* la synchronisation entre PC et Steam Deck se fassent toutes seules, avec une version par session où revenir et la possibilité de tout auto-héberger, c'est à ça que sert Hoard. [Téléchargez-le](/download), ou lisez d'abord [comment l'auto-héberger avec Docker](/guides/self-host-hoard). Il y a aussi un [comparatif détaillé avec Ludusavi](/guides/ludusavi-alternative) si c'est celui que vous mettez dans la balance.
`,Ue=`---
title: "Sincronizzazione dei salvataggi a confronto: Hoard contro Ludusavi, Syncthing, OpenSave e le altre"
description: "Confronto onesto degli strumenti che copiano e sincronizzano i salvataggi PC — Ludusavi, Syncthing, OpenSave, OpenCloudSaves, Game Backup Monitor, Aletheia, SaveSync e Hoard — con tabella e una sezione su dove Hoard perde."
order: 4
updated: 2026-08-11
---

Steam Cloud copre solo i giochi comprati su Steam, e solo quando lo sviluppatore si è preso la briga di attivarlo. Emulatori, GOG, Epic, itch.io, giochi non Steam, qualsiasi cosa con mod: niente di tutto questo rientra. Se giochi su più macchine, un fisso e uno Steam Deck per dire, finisci a copiare cartelle a mano sperando di aver preso la più recente.

Diversi strumenti risolvono la cosa, e non fanno tutti lo stesso. Alcuni fanno copie locali, altri replicano cartelle tra dispositivi, altri caricano su un cloud. Questa pagina li passa in rassegna e dice in cosa ciascuno è davvero bravo. Hoard è il mio progetto, quindi la parte onesta arriva alla fine: una sezione su dove Hoard perde, e una tabella che puoi leggere senza credere a una parola del testo.

## Ludusavi

Il più noto, e a ragione. Ludusavi (di mtkennerly) è uno strumento di backup gratuito e open source, con interfaccia e con CLI, costruito sul manifesto comunitario delle posizioni dei salvataggi che copre decine di migliaia di giochi: lo stesso manifesto che usano quasi tutti quelli di questa lista, Hoard compreso. Tiene copie locali versionate e può spingerle su un cloud tuo tramite Rclone.

**Il migliore se:** vuoi copie locali, controllo totale e nessun server da nessuna parte. È la scelta più sicura della lista e non costa nulla.

**Dove si ferma:** la sincronizzazione tra macchine è una cosa che monti tu. Pianifichi un backup, configuri un remote Rclone e ti ricordi di ripristinare sull'altro PC *prima* di giocare. Funziona, ma nulla ti impedisce di dimenticare l'ultimo passo.

## Syncthing

Non è affatto uno strumento per giochi: è uno specchio di cartelle peer-to-peer generico, e molto buono. Gli indichi una cartella di salvataggi e compare sugli altri dispositivi.

**Il migliore se:** lo usi già e vuoi i file in due posti senza cloud in mezzo.

**Dove si ferma:** replica, non fotografa. Un salvataggio corrotto raggiunge ogni dispositivo in pochi secondi, esattamente alla stessa velocità di uno buono. Il versionamento è per file, senza alcuna idea di cosa sia una sessione di gioco, quindi «torna a com'era martedì sera» te lo ricostruisci a mano. Due macchine che hanno giocato entrambe offline ti danno file di conflitto, non una fusione.

## OpenSave

Sincronizzazione peer-to-peer costruita apposta per i salvataggi, in Go, con licenza MIT, per Windows, Linux e Steam Deck. Nessun account, nessun server: i dispositivi si accoppiano tra loro e sincronizzano sulla rete locale o tramite un codice stanza su un relay. Ogni modifica diventa uno snapshot, ci sono i branch per partite parallele, i conflitti si risolvono per lignaggio di sincronizzazione invece che per orologio, e viaggiano solo i blocchi cambiati. Volendo può replicare su Drive, Dropbox, OneDrive o WebDAV.

**Il migliore se:** ti rifiuti di avere un account e i tuoi dispositivi sono accesi insieme abbastanza spesso.

**Dove si ferma:** peer-to-peer vuol dire che il salvataggio vive solo sui tuoi dispositivi. Se muore il Deck con l'unica copia recente e la replica non era configurata, è finita. Per sincronizzare devono essere accesi entrambi i dispositivi, e non c'è una build per macOS.

## OpenCloudSaves

Un'interfaccia multipiattaforma che sincronizza le cartelle dei salvataggi su un cloud che già paghi — OneDrive, Google Drive, Dropbox, Nextcloud — con Rclone sotto.

**Il migliore se:** vuoi i salvataggi in uno spazio di archiviazione che hai già, con un'interfaccia invece dei file di configurazione di Rclone.

**Dove si ferma:** non c'è deduplicazione a livello di contenuto. Dieci copie di un salvataggio da 2 GB sono 20 GB della tua quota Drive, e i cloud di file sincronizzano file, non sessioni di gioco: quel che recuperi è com'era la cartella in quel momento.

## Game Backup Monitor

Prima Windows, e il capostipite di tutto il genere. GBM sorveglia il processo del gioco e, quando esci, comprime il salvataggio con 7-Zip tenendo una cronologia numerata.

**Il migliore se:** sei su un solo PC Windows e vuoi un archivio locale compresso senza pensarci.

**Dove si ferma:** è uno strumento di backup, non di sincronizzazione. Portare l'archivio su una seconda macchina è affare tuo, e Steam Deck / SteamOS non è il suo terreno.

## Aletheia

Il più nuovo del gruppo, AGPL, e va proprio sulla parte che gli altri coprono a metà: i launcher. Heroic, itch.io, Lutris, Steam, GOG Galaxy e Xbox, su Windows, Linux e macOS.

**Il migliore se:** la tua libreria è sparsa tra launcher che gli altri strumenti rilevano male, soprattutto Xbox/Game Pass e Heroic.

**Dove si ferma:** è un progetto giovane con un perimetro volutamente stretto. Copia e ripristino sono tutto il set di funzioni; dietro non c'è un cloud versionato.

## SaveSync

Quello commerciale, venduto su Steam con acquisto unico, centrato su Windows. Il suo trucco è che non punta a te-su-due-PC ma al cooperativo: i salvataggi finiscono in voci private e non elencate dello Steam Workshop così che un amico possa scaricarsi il tuo mondo di Valheim o di Factorio, e c'è anche la sincronizzazione in rete locale.

**Il migliore se:** il problema che risolvi è «ospita il mio amico e mi serve il suo salvataggio», non «che i miei salvataggi mi seguano».

**Dove si ferma:** codice chiuso, Windows, legato a Steam come mezzo di trasporto, e un elenco di giochi cooperativi supportati invece di tutto quello che possiedi.

## Una nota su EmuDeck

EmuDeck salta fuori in queste discussioni e non è un concorrente nel senso normale: è un installatore e configuratore di emulatori per Steam Deck, e la sincronizzazione che offre è una comodità innestata su quel lavoro (Rclone verso un cloud di file, solo per i salvataggi degli emulatori). Si sovrappone agli strumenti qui sopra senza essere la stessa cosa: EmuDeck ti sistema gli emulatori, quelli di qui si occupano dei salvataggi dell'intera libreria. C'è chi usa EmuDeck accanto a uno di questi, ed è una configurazione sensata, non ridondante.

## Hoard

Hoard prende la sessione di gioco come unità. Il motore gira come servizio in background — \`hoardd\`, senza finestra, quindi funziona in modalità gioco su SteamOS —, si accorge che hai smesso di giocare e scatta lo snapshot allora, invece di reagire a ogni scrittura di file mentre giochi.

- **Cronologia versionata per sessione.** Ogni sessione è una versione a cui tornare, anche dopo un guasto al disco o un'installazione pulita.
- **Deduplicazione per hash del contenuto.** Dieci versioni di un salvataggio da 2 GB costano circa 2 GB, non 20 GB. I trasferimenti sono compressi con zstd.
- **SHA-256 in salita e in discesa.** La corruzione viene intercettata prima che possa sovrascrivere un salvataggio buono. Niente viene mai sovrascritto in silenzio: è tutto il senso del progetto.
- **Cloud o self-hosted, lo stesso binario.** Hoard Cloud ha un piano gratuito (2 GB, 3 dispositivi, cronologia completa). Oppure avvii \`hoard-server\` da solo con Docker Compose su qualsiasi archiviazione compatibile S3 — MinIO, Garage, Backblaze B2 — senza account e senza quota. AGPL-3.0.
- **Windows, Linux, macOS**, più una CLI senza interfaccia per uno Steam Deck o un server.
- **Emulatori in beta:** PCSX2, RPCS3, Dolphin, Cemu, Ryujinx, RetroArch, DuckStation, PPSSPP e altri come preimpostazioni.

## Il dettaglio che decide la sincronizzazione Steam Deck ↔ PC

Vale la pena saperlo qualunque strumento tu scelga. Il salvataggio cloud di un gioco Steam vive in \`<AppID>/remote/\`, e la cartella *sopra* contiene \`remotecache.vdf\`, lo stato degli obiettivi, le statistiche e i contatori delle ore giocate: tutte cose che legittimamente differiscono tra il Deck e il fisso.

Sincronizza la cartella padre e ottieni un conflitto permanente tra due macchine che non hanno mai discordato su un solo salvataggio. Hoard traccia \`remote/\`, non la cartella padre. A qualsiasi strumento a cui indichi una cartella a mano si può dire lo stesso, ed è la prima cosa da controllare quando una configurazione di sincronizzazione segnala conflitti senza motivo visibile.

## Dove Hoard perde

- **Vuole un server.** Account cloud o macchina tua, in ogni caso è infrastruttura, mentre OpenSave o Ludusavi non ne richiedono nessuna.
- **Il supporto agli emulatori è in beta.** Le installazioni portatili e le manie dei singoli emulatori lo colgono ancora in fallo, e oggi Aletheia e OpenSave coprono meglio certi casi limite di launcher ed emulatori.
- **macOS è provato pochissimo su hardware vero.** Compila e gira, ma nessuno ci ha vissuto per mesi.
- **È giovane.** Ludusavi e Game Backup Monitor hanno anni di segnalazioni alle spalle. Hoard no, e per qualcosa che custodisce una partita da 200 ore la differenza conta.
- **Non fa condivisione cooperativa.** Se vuoi passare un mondo a un amico, SaveSync è fatto per quello e Hoard no.

## La tabella

| Strumento | Sincronizzazione automatica tra dispositivi | Dove vivono i salvataggi | Cronologia | Piattaforme | Licenza |
|---|---|---|---|---|---|
| **Hoard** | Sì, per sessione di gioco | Hoard Cloud o un tuo server (compatibile S3) | Versionata per sessione, deduplicata | Win · Linux · macOS · Deck | AGPL-3.0, piano gratuito |
| **Ludusavi** | Manuale, o Rclone montato da te | Locale, più il tuo remote Rclone | Copie locali versionate | Win · Linux · macOS | Gratis, open source |
| **Syncthing** | Sì, specchio continuo | Solo i tuoi dispositivi | Versionamento per file | Tutto | Gratis, open source |
| **OpenSave** | Sì, peer-to-peer | I tuoi dispositivi, replica cloud opzionale | Snapshot e branch | Win · Linux · Deck | MIT |
| **OpenCloudSaves** | Sì, tramite il tuo cloud | OneDrive / Drive / Dropbox / Nextcloud | Quello che tiene il cloud | Win · Linux · macOS | Gratis, open source |
| **Game Backup Monitor** | No | Archivi 7-Zip locali | Backup numerati | Windows | Gratis, open source |
| **Aletheia** | Copia e ripristino per launcher | Il tuo spazio | Copie | Win · Linux · macOS | AGPL-3.0 |
| **SaveSync** | Sì, e con gli amici | Voci private dello Steam Workshop | Secondo l'app | Windows | A pagamento, codice chiuso |

## Quindi quale

Se vuoi una sola macchina messa al sicuro e nient'altro, prendi Ludusavi o Game Backup Monitor. Se non vuoi un account per nessun motivo e i tuoi dispositivi sono di solito accesi insieme, OpenSave. Se i salvataggi devono finire in una cartella di Drive che già paghi, OpenCloudSaves. Se condividi un mondo cooperativo con gli amici, SaveSync.

Se invece vuoi che copia *e* sincronizzazione tra PC e Steam Deck avvengano da sole, con una versione per sessione a cui tornare e la possibilità di ospitare tutto da te, è per questo che c'è Hoard. [Scaricalo](/download), o leggi prima [come ospitarlo da solo con Docker](/guides/self-host-hoard). C'è anche un [confronto approfondito con Ludusavi](/guides/ludusavi-alternative) se è quello che stai valutando.
`,Fe=`---
title: "セーブデータ同期ツール比較：Hoard と Ludusavi・Syncthing・OpenSave ほか"
description: "PC のセーブデータをバックアップ・同期するツールの正直な比較。Ludusavi、Syncthing、OpenSave、OpenCloudSaves、Game Backup Monitor、Aletheia、SaveSync、Hoard を一覧表つきで比較し、Hoard が負けている点も書いています。"
order: 4
updated: 2026-08-11
---

Steam クラウドが守ってくれるのは Steam で買ったゲームだけ、しかも開発者が対応をオンにした場合に限られます。エミュレーター、GOG、Epic、itch.io、Steam 以外のゲーム、MOD を入れたもの——どれも対象外です。デスクトップと Steam Deck のように複数の環境で遊んでいると、結局フォルダーを手でコピーして、新しいほうを掴んだと信じるしかなくなります。

これを解決するツールはいくつもありますが、やっていることは同じではありません。ローカルにバックアップを取るもの、端末間でフォルダーをミラーするもの、クラウドへアップロードするもの。このページではそれぞれを見ていき、何が本当に得意なのかを書きます。Hoard は私のプロジェクトなので、正直な部分は最後に置きました。Hoard が負けている点の節と、本文を一切信じなくても読める比較表です。

## Ludusavi

いちばん有名で、それも当然の一本です。Ludusavi（作者は mtkennerly）は GUI と CLI を備えた無料のオープンソースのバックアップツールで、何万本ものゲームのセーブ位置を収録したコミュニティ製マニフェストの上に成り立っています。このページのほとんどのツール（Hoard も含む）が使っているのと同じマニフェストです。ローカルにバージョン付きのバックアップを保持し、Rclone を設定すれば自分のクラウドへ送れます。

**向いているのは：** ローカルのバックアップと完全な制御が欲しくて、サーバーはどこにも置きたくない人。このリストで最も安全な選択で、しかも無料です。

**足りないところ：** 端末間の同期は自分で組み立てるものになります。バックアップを予約し、Rclone のリモートを設定し、遊ぶ*前*に別の PC で復元するのを忘れない。動きはしますが、最後の一手を忘れるのを止めてくれるものは何もありません。

## Syncthing

そもそもゲーム用ではなく、汎用の P2P フォルダーミラーで、しかも良い出来です。セーブフォルダーを指定すれば、ほかの端末にも現れます。

**向いているのは：** すでに動かしていて、クラウドを挟まずにファイルを二か所に置きたい人。

**足りないところ：** ミラーであって、スナップショットではありません。壊れたセーブも、正常なセーブとまったく同じ速さで数秒のうちに全端末へ届きます。ファイル単位のバージョン管理はありますが、プレイセッションという概念はないので、「火曜の夜の状態に戻す」は手作業で組み直すことになります。両方の端末がオフラインで遊んでいれば、返ってくるのは競合ファイルであってマージではありません。

## OpenSave

セーブデータ専用に作られた P2P 同期。Go 製、MIT ライセンス、Windows・Linux・Steam Deck 対応です。アカウントもサーバーも不要で、端末同士をペアリングして LAN 経由、あるいはリレーのルームコード経由で同期します。変更のたびにスナップショットを取り、並行プレイ用のブランチがあり、競合は時計ではなく同期の系譜で解決し、転送は変化したブロックだけ。任意で Drive・Dropbox・OneDrive・WebDAV へのミラーもできます。

**向いているのは：** アカウントは絶対に作りたくなくて、端末が同時に起動している機会が十分にある人。

**足りないところ：** P2P である以上、セーブはあなたの端末の上にしか存在しません。最新のコピーを持っていた Deck が壊れ、ミラーを設定していなければそれで終わりです。同期には両方の端末が動いている必要があり、macOS 版はありません。

## OpenCloudSaves

すでに料金を払っているクラウド——OneDrive、Google Drive、Dropbox、Nextcloud——へセーブフォルダーを同期する、マルチプラットフォームの GUI です。中身は Rclone です。

**向いているのは：** すでに持っているストレージにセーブを置きたくて、Rclone の設定ファイルではなく画面で操作したい人。

**足りないところ：** 内容ベースの重複排除がありません。2 GB のセーブが 10 世代あれば Drive の容量を 20 GB 食いますし、クラウドドライブが同期するのはファイルであってプレイセッションではないので、戻ってくるのは「その時点のフォルダーの姿」だけです。

## Game Backup Monitor

Windows 中心で、このジャンルの元祖です。GBM はゲームのプロセスを見張り、終了した時点でセーブを 7-Zip で圧縮し、連番の履歴として残します。

**向いているのは：** Windows PC 一台で、何も考えずに圧縮済みのローカルアーカイブが欲しい人。

**足りないところ：** バックアップのツールであって同期のツールではありません。アーカイブを二台目に持っていくのは自分の仕事ですし、Steam Deck / SteamOS は得意分野ではありません。

## Aletheia

この中では最も新しく、AGPL。ほかが中途半端にしか押さえていない部分、つまりランチャーを正面から狙っています。Heroic、itch.io、Lutris、Steam、GOG Galaxy、Xbox に、Windows・Linux・macOS 対応。

**向いているのは：** ライブラリが、ほかのツールでは検出しづらいランチャー——とくに Xbox / Game Pass と Heroic——に散らばっている人。

**足りないところ：** 意図的に範囲を絞った若いプロジェクトです。機能はバックアップと復元まで。背後にバージョン管理されたクラウドがあるわけではありません。

## SaveSync

唯一の商用で、Steam で買い切り販売、Windows 中心。特徴は、狙いが「二台の PC を使う自分」ではなく協力プレイにあることです。セーブは非公開・非掲載の Steam ワークショップの項目として保存され、友達があなたの Valheim や Factorio のワールドを持っていけます。LAN 同期もあります。

**向いているのは：** 解決したい問題が「自分のセーブについてきてほしい」ではなく「友達がホストで、その人のセーブが要る」である人。

**足りないところ：** クローズドソース、Windows、転送路として Steam に依存、そして対応するのは所有物すべてではなく協力プレイ向けの対応ゲーム一覧です。

## EmuDeck についての注記

この手の話題では EmuDeck も名前が挙がりますが、通常の意味での競合ではありません。Steam Deck 向けのエミュレーターのインストーラー兼設定ツールであり、備わっている同期はその仕事に付け足された利便機能です（クラウドドライブに対する Rclone、しかもエミュレーターのセーブ限定）。上のツール群と重なる部分はあっても、同じ種類のものではありません。EmuDeck はエミュレーター環境を整えるもの、ここで挙げたものはライブラリ全体のセーブを見守るもの。EmuDeck とどれか一つを併用している人もいて、それは重複ではなく理にかなった構成です。

## Hoard

Hoard はプレイセッションを単位として扱います。エンジンはバックグラウンドサービスとして動き（\`hoardd\`、ウィンドウを持たないので SteamOS のゲームモードでも動作します）、遊び終わったことを検知してからスナップショットを取ります。プレイ中のファイル書き込みに逐一反応するのではありません。

- **セッションごとのバージョン履歴。** どのセッションにも戻れます。ディスク故障のあとでも、クリーンインストールのあとでも。
- **内容ハッシュによる重複排除。** 2 GB のセーブが 10 世代あっても消費はおよそ 2 GB で、20 GB にはなりません。転送は zstd で圧縮されます。
- **アップロード時とダウンロード時の SHA-256。** 破損は、正常なセーブを上書きする前に検出されます。何も黙って上書きされない——設計の核はそこにあります。
- **クラウドでも自己ホストでも、同じバイナリ。** Hoard Cloud には無料プラン（2 GB、3 台、履歴は全部）があります。あるいは \`hoard-server\` を Docker Compose で自分で立て、S3 互換ストレージ（MinIO、Garage、Backblaze B2）に対して動かせば、アカウントも容量制限もありません。AGPL-3.0。
- **Windows・Linux・macOS**、加えて Steam Deck やサーバー向けのヘッドレス CLI。
- **エミュレーターはベータ：** PCSX2、RPCS3、Dolphin、Cemu、Ryujinx、RetroArch、DuckStation、PPSSPP ほかをプリセットで用意。

## Steam Deck ↔ PC の同期を左右する細部

どのツールを選ぶにしても知っておく価値があります。Steam のゲームのクラウドセーブは \`<AppID>/remote/\` にあり、その*一つ上*のフォルダーには \`remotecache.vdf\`、実績の状態、統計、プレイ時間のカウンターが入っています。これらは Deck とデスクトップとで違っていて当たり前のものです。

親フォルダーを同期すれば、セーブについては一度も食い違っていない二台の間で、恒久的な競合が起きます。Hoard が追いかけるのは \`remote/\` であって親フォルダーではありません。フォルダーを手動で指定できるツールなら同じ設定にできますし、同期の構成が理由もなく競合を出し続けるときに最初に確認すべき点でもあります。

## Hoard が負けている点

- **サーバーを欲しがる。** クラウドのアカウントか自前のマシンか、いずれにせよインフラです。OpenSave や Ludusavi はどちらも必要としません。
- **エミュレーター対応はベータ。** ポータブル構成や各エミュレーターの癖にまだ足をすくわれますし、ランチャーやエミュレーターの一部の特殊なケースは今日のところ Aletheia や OpenSave のほうがうまく扱えます。
- **macOS は実機での検証がほとんどない。** ビルドも起動もしますが、何か月も常用した人がいません。
- **歴史が浅い。** Ludusavi や Game Backup Monitor には何年分ものバグ報告が積み上がっています。Hoard にはそれがなく、200 時間のセーブを預かるものとしては軽くない差です。
- **協力プレイの共有はできない。** 友達にワールドを渡したいなら、それは SaveSync のための仕事で、Hoard の仕事ではありません。

## 比較表

| ツール | 端末間の自動同期 | セーブの置き場所 | 履歴 | 対応環境 | ライセンス |
|---|---|---|---|---|---|
| **Hoard** | あり（プレイセッション単位） | Hoard Cloud または自前サーバー（S3 互換） | セッション単位のバージョン、重複排除あり | Win · Linux · macOS · Deck | AGPL-3.0、無料プランあり |
| **Ludusavi** | 手動、または自分で組む Rclone | ローカル＋自分の Rclone リモート | バージョン付きローカルバックアップ | Win · Linux · macOS | 無料・オープンソース |
| **Syncthing** | あり（常時ミラー） | 自分の端末のみ | ファイル単位のバージョン | すべて | 無料・オープンソース |
| **OpenSave** | あり（P2P） | 自分の端末、任意でクラウドミラー | スナップショットとブランチ | Win · Linux · Deck | MIT |
| **OpenCloudSaves** | あり（自分のクラウド経由） | OneDrive / Drive / Dropbox / Nextcloud | クラウド側が保持する範囲 | Win · Linux · macOS | 無料・オープンソース |
| **Game Backup Monitor** | なし | ローカルの 7-Zip アーカイブ | 連番バックアップ | Windows | 無料・オープンソース |
| **Aletheia** | ランチャーごとのバックアップと復元 | 自分のストレージ | バックアップ | Win · Linux · macOS | AGPL-3.0 |
| **SaveSync** | あり（友達とも） | 非公開の Steam ワークショップ項目 | アプリの仕様による | Windows | 有料・クローズドソース |

## で、どれを選ぶか

一台だけ守れれば十分なら Ludusavi か Game Backup Monitor。アカウントだけは何があっても作りたくなくて、端末がだいたい同時に起動しているなら OpenSave。すでに料金を払っている Drive のフォルダーにセーブを置きたいなら OpenCloudSaves。友達と協力プレイのワールドを共有したいなら SaveSync。

バックアップ*と*、PC と Steam Deck をまたぐ同期が勝手に行われること、セッションごとに戻れるバージョンがあること、そして全部を自分でホストできる選択肢があること——それを求めるなら Hoard です。[ダウンロード](/download)するか、先に[Docker で自己ホストする方法](/guides/self-host-hoard)を読んでみてください。天秤にかけている相手が Ludusavi なら、[詳しい比較](/guides/ludusavi-alternative)もあります。
`,Xe=`---
title: "Sincronização de saves comparada: Hoard frente a Ludusavi, Syncthing, OpenSave e as outras"
description: "Comparação honesta das ferramentas que fazem backup e sincronizam saves de PC — Ludusavi, Syncthing, OpenSave, OpenCloudSaves, Game Backup Monitor, Aletheia, SaveSync e Hoard — com tabela e uma secção sobre onde o Hoard perde."
order: 4
updated: 2026-08-11
---

A Steam Cloud só cobre jogos comprados na Steam, e apenas quando o programador se deu ao trabalho de a ligar. Emuladores, GOG, Epic, itch.io, jogos fora da Steam, qualquer coisa com mods: nada disso entra. Se jogas em mais do que uma máquina, um desktop e uma Steam Deck por exemplo, acabas a copiar pastas à mão na esperança de teres apanhado a mais recente.

Há várias ferramentas que resolvem isto, e não fazem todas o mesmo. Umas fazem cópias locais, outras espelham pastas entre dispositivos, outras enviam para uma nuvem. Esta página passa por elas e diz em que é que cada uma é genuinamente boa. O Hoard é o meu projeto, por isso a parte honesta fica no fim: uma secção sobre onde o Hoard perde, e uma tabela que podes ler sem acreditar numa única linha do texto.

## Ludusavi

O mais conhecido, e com razão. O Ludusavi (de mtkennerly) é uma ferramenta de backup gratuita e open source, com interface e com CLI, construída sobre o manifesto comunitário de localizações de saves que cobre dezenas de milhares de jogos — o mesmo manifesto que quase todas as desta lista usam, o Hoard incluído. Guarda cópias locais versionadas e pode enviá-las para uma nuvem tua através do Rclone.

**Melhor se:** queres cópias locais, controlo total e nenhum servidor em lado nenhum. É a escolha mais segura da lista e não custa nada.

**Onde para:** a sincronização entre máquinas é algo que montas tu. Agendar um backup, configurar um remote do Rclone e lembrares-te de restaurar no outro PC *antes* de jogar. Funciona, mas nada te impede de esquecer o último passo.

## Syncthing

Não é sequer uma ferramenta de jogos: é um espelho de pastas peer-to-peer de uso geral, e muito bom. Apontas-lhe uma pasta de saves e ela aparece nos teus outros dispositivos.

**Melhor se:** já o tens a correr e queres os ficheiros em dois sítios sem nuvem pelo meio.

**Onde para:** espelha, não fotografa. Um save corrompido chega a todos os dispositivos em segundos, exatamente à mesma velocidade de um bom. O versionamento é por ficheiro, sem ideia nenhuma do que é uma sessão de jogo, por isso «voltar a como estava na terça à noite» é algo que reconstróis à mão. Duas máquinas que jogaram offline dão-te ficheiros de conflito, não uma fusão.

## OpenSave

Sincronização peer-to-peer feita de propósito para saves, em Go, com licença MIT, para Windows, Linux e Steam Deck. Sem conta e sem servidor: os dispositivos emparelham entre si e sincronizam pela rede local ou através de um código de sala num relay. Cada alteração vira um snapshot, há branches para partidas paralelas, os conflitos resolvem-se por linhagem de sincronização em vez de pelo relógio, e só viajam os blocos que mudaram. Opcionalmente pode espelhar para Drive, Dropbox, OneDrive ou WebDAV.

**Melhor se:** recusas ter uma conta e os teus dispositivos estão ligados ao mesmo tempo com frequência suficiente.

**Onde para:** peer-to-peer significa que o save só vive nos teus dispositivos. Se morre a Deck com a única cópia recente e o espelho nunca foi configurado, acabou. Os dois dispositivos têm de estar ligados para haver sincronização, e não há versão para macOS.

## OpenCloudSaves

Uma interface multiplataforma que sincroniza as tuas pastas de saves para uma nuvem que já pagas — OneDrive, Google Drive, Dropbox, Nextcloud — com o Rclone por baixo.

**Melhor se:** queres os saves numa conta de armazenamento que já tens, com interface em vez de ficheiros de configuração do Rclone.

**Onde para:** não há desduplicação ao nível do conteúdo. Dez cópias de um save de 2 GB são 20 GB da tua quota do Drive, e as nuvens de ficheiros sincronizam ficheiros, não sessões de jogo, por isso o que recuperas é como a pasta estava naquele momento.

## Game Backup Monitor

Windows primeiro, e o original de todo este género. O GBM vigia o processo do jogo e, quando sais, comprime o save com 7-Zip e guarda um histórico numerado.

**Melhor se:** estás num único PC com Windows e queres um arquivo local comprimido sem pensar nisso.

**Onde para:** é uma ferramenta de backup, não de sincronização. Levar o arquivo para uma segunda máquina é problema teu, e a Steam Deck / SteamOS não é o seu terreno.

## Aletheia

O mais recente do grupo, AGPL, e vai exatamente à parte que os outros cobrem pela metade: os launchers. Heroic, itch.io, Lutris, Steam, GOG Galaxy e Xbox, em Windows, Linux e macOS.

**Melhor se:** a tua biblioteca está espalhada por launchers que as outras ferramentas detetam mal, sobretudo Xbox/Game Pass e Heroic.

**Onde para:** é um projeto jovem com um âmbito propositadamente estreito. Fazer cópia e restaurar é todo o conjunto de funcionalidades; não há uma nuvem versionada por trás.

## SaveSync

O comercial, vendido na Steam como compra única, virado para Windows. O truque dele é que não aponta a ti-em-dois-PC, mas ao cooperativo: os saves vão para entradas privadas e não listadas da Steam Workshop para que um amigo possa puxar o teu mundo de Valheim ou de Factorio, e também há sincronização por rede local.

**Melhor se:** o problema que resolves é «o meu amigo aloja e preciso do save dele», não «que os meus saves me sigam».

**Onde para:** código fechado, Windows, preso à Steam como meio de transporte, e uma lista de jogos cooperativos suportados em vez de tudo o que tens.

## Uma nota sobre o EmuDeck

O EmuDeck aparece nestas conversas e não é um concorrente no sentido normal: é um instalador e configurador de emuladores para a Steam Deck, e a sincronização que oferece é uma comodidade acoplada a esse trabalho (Rclone contra uma nuvem de ficheiros, só para saves de emulador). Sobrepõe-se às ferramentas acima sem ser a mesma coisa: o EmuDeck deixa-te os emuladores montados, e as daqui tomam conta dos saves da biblioteca toda. Há quem use o EmuDeck ao lado de uma destas, e é uma montagem sensata, não redundante.

## Hoard

O Hoard toma a sessão de jogo como unidade. O motor corre como serviço em segundo plano — \`hoardd\`, sem janela, por isso funciona no modo de jogo do SteamOS —, dá-se conta de que paraste de jogar e faz o snapshot nessa altura, em vez de reagir a cada escrita de ficheiro a meio da partida.

- **Histórico versionado por sessão.** Cada sessão é uma versão à qual podes voltar, mesmo depois de uma falha de disco ou de uma instalação limpa.
- **Desduplicação por hash de conteúdo.** Dez versões de um save de 2 GB custam cerca de 2 GB, não 20 GB. As transferências vão comprimidas com zstd.
- **SHA-256 à subida e à descida.** A corrupção é apanhada antes de poder sobrescrever um save bom. Nada é sobrescrito em silêncio: é esse o desenho todo.
- **Nuvem ou auto-alojado, o mesmo binário.** O Hoard Cloud tem plano gratuito (2 GB, 3 dispositivos, histórico completo). Ou levantas o \`hoard-server\` tu mesmo com Docker Compose contra qualquer armazenamento compatível com S3 — MinIO, Garage, Backblaze B2 — sem conta e sem quota. AGPL-3.0.
- **Windows, Linux, macOS**, mais uma CLI sem interface para uma Steam Deck ou um servidor.
- **Emuladores em beta:** PCSX2, RPCS3, Dolphin, Cemu, Ryujinx, RetroArch, DuckStation, PPSSPP e outros como predefinições.

## O detalhe que decide a sincronização Steam Deck ↔ PC

Vale a pena saber, escolhas a ferramenta que escolheres. O save na nuvem de um jogo da Steam vive em \`<AppID>/remote/\`, e a pasta *acima* guarda o \`remotecache.vdf\`, o estado das conquistas, estatísticas e contadores de horas jogadas — coisas que legitimamente diferem entre a tua Deck e o teu desktop.

Sincroniza a pasta-mãe e ficas com um conflito permanente entre duas máquinas que nunca discordaram sobre um único save. O Hoard segue \`remote/\`, não a pasta-mãe. A qualquer ferramenta a que apontes uma pasta à mão pode dizer-se o mesmo, e é a primeira coisa a verificar quando uma configuração de sincronização assinala conflitos sem motivo visível.

## Onde o Hoard perde

- **Quer um servidor.** Conta na nuvem ou máquina tua, de qualquer forma é infraestrutura, e o OpenSave ou o Ludusavi não precisam de nenhuma.
- **O suporte a emuladores está em beta.** As instalações portáteis e as manias de cada emulador ainda o apanham, e hoje o Aletheia e o OpenSave cobrem melhor alguns casos limite de launchers e emuladores.
- **O macOS está mal testado em hardware real.** Compila e funciona, mas ninguém viveu lá durante meses.
- **É jovem.** O Ludusavi e o Game Backup Monitor têm anos de relatos de bugs atrás deles. O Hoard não, e isso pesa em algo que guarda um save de 200 horas.
- **Não faz partilha cooperativa.** Se queres passar um mundo a um amigo, o SaveSync foi feito para isso e o Hoard não.

## A tabela

| Ferramenta | Sincronização automática entre dispositivos | Onde vivem os saves | Histórico | Plataformas | Licença |
|---|---|---|---|---|---|
| **Hoard** | Sim, por sessão de jogo | Hoard Cloud ou servidor teu (compatível com S3) | Versionado por sessão, desduplicado | Win · Linux · macOS · Deck | AGPL-3.0, plano gratuito |
| **Ludusavi** | Manual, ou Rclone montado por ti | Local, mais o teu remote do Rclone | Cópias locais versionadas | Win · Linux · macOS | Grátis, open source |
| **Syncthing** | Sim, espelho contínuo | Só os teus dispositivos | Versionamento por ficheiro | Tudo | Grátis, open source |
| **OpenSave** | Sim, peer-to-peer | Os teus dispositivos, espelho opcional na nuvem | Snapshots e branches | Win · Linux · Deck | MIT |
| **OpenCloudSaves** | Sim, através da tua nuvem | OneDrive / Drive / Dropbox / Nextcloud | O que a nuvem guardar | Win · Linux · macOS | Grátis, open source |
| **Game Backup Monitor** | Não | Arquivos 7-Zip locais | Cópias numeradas | Windows | Grátis, open source |
| **Aletheia** | Cópia e restauro por launcher | O teu armazenamento | Cópias | Win · Linux · macOS | AGPL-3.0 |
| **SaveSync** | Sim, e com amigos | Entradas privadas da Steam Workshop | Conforme a app | Windows | Pago, código fechado |

## Então qual

Se queres uma máquina protegida e mais nada, leva o Ludusavi ou o Game Backup Monitor. Se não queres uma conta em circunstância alguma e os teus dispositivos costumam estar ligados ao mesmo tempo, o OpenSave. Se os saves devem ir parar a uma pasta do Drive que já pagas, o OpenCloudSaves. Se partilhas um mundo cooperativo com amigos, o SaveSync.

Se o que queres é que a cópia *e* a sincronização entre PC e Steam Deck aconteçam sozinhas, com uma versão por sessão à qual voltar e a opção de alojar tudo tu, é para isso que serve o Hoard. [Descarrega-o](/download), ou lê primeiro [como alojá-lo com Docker](/guides/self-host-hoard). Há também uma [comparação longa com o Ludusavi](/guides/ludusavi-alternative) se for essa a que estás a pesar.
`,Ke=`---
title: "游戏存档同步工具对比：Hoard 与 Ludusavi、Syncthing、OpenSave 等"
description: "对备份与同步 PC 游戏存档的各款工具做一次诚实对比——Ludusavi、Syncthing、OpenSave、OpenCloudSaves、Game Backup Monitor、Aletheia、SaveSync 和 Hoard——附对比表，以及 Hoard 输在哪里的一节。"
order: 4
updated: 2026-08-11
---

Steam 云存档只覆盖你在 Steam 上买的游戏，而且还得开发者愿意打开这个开关。模拟器、GOG、Epic、itch.io、非 Steam 的游戏、任何装了 MOD 的东西，统统不在其中。如果你在不止一台机器上玩——比如一台台式机加一台 Steam Deck——最后就是手动复制文件夹，然后祈祷自己拿的是最新的那一份。

有好几款工具在解决这件事，而它们做的并不是同一件事。有的做本地备份，有的在设备之间镜像文件夹，有的上传到云端。这一页把它们逐个过一遍，说清楚每一款真正擅长什么。Hoard 是我自己的项目，所以诚实的部分放在最后：一节讲 Hoard 输在哪里，再加一张即使你一个字都不信正文也能读的表。

## Ludusavi

最有名的一款，而且名副其实。Ludusavi（作者 mtkennerly）是一款免费开源的备份工具，有图形界面也有命令行，建立在收录了数万款游戏存档位置的社区清单之上——本页几乎所有工具用的都是同一份清单，Hoard 也不例外。它保留带版本的本地备份，并且可以通过配置 Rclone 推送到你自己的云。

**适合：** 想要本地备份、完全掌控，并且任何地方都不想有服务器的人。它是这份名单里最稳妥的选择，而且一分钱不花。

**止步之处：** 跨机器同步是要你自己拼出来的。安排备份、配置 Rclone 远端，然后记得在开玩*之前*到另一台电脑上还原。它确实可行，但没有任何东西会阻止你忘掉最后一步。

## Syncthing

它根本不是游戏工具，而是一个通用的点对点文件夹镜像，而且做得很好。把存档文件夹指给它，它就会出现在你其他设备上。

**适合：** 你本来就在用它，并且希望文件同时存在两处、中间不经过任何云。

**止步之处：** 它做的是镜像，不是快照。一个损坏的存档会在几秒内到达每一台设备，速度和一个完好的存档一模一样。它的版本保留是按文件的，完全不知道"一局游戏"是什么概念，所以"回到周二晚上的样子"得靠你手工拼回来。两台机器都离线玩过之后，你拿到的是冲突文件，不是合并结果。

## OpenSave

专为存档而做的点对点同步，用 Go 写成，MIT 许可，支持 Windows、Linux 和 Steam Deck。不需要账号也不需要服务器：设备之间互相配对，通过局域网或中继的房间码同步。每次改动都会生成快照，有分支可以放平行的存档进度，冲突按同步谱系而不是按时钟解决，传输只走变化的数据块。也可以选择镜像到 Drive、Dropbox、OneDrive 或 WebDAV。

**适合：** 说什么都不肯注册账号，而且设备同时开机的机会足够多的人。

**止步之处：** 点对点意味着存档只活在你自己的设备上。如果那台存着唯一一份最新存档的 Deck 坏了，而镜像又从来没配置过，那就到此为止。要同步，两台设备都得开着；另外没有 macOS 版本。

## OpenCloudSaves

一个跨平台的图形界面，把你的存档文件夹同步到你已经在付费的云上——OneDrive、Google Drive、Dropbox、Nextcloud——底层用的是 Rclone。

**适合：** 想把存档放进已经拥有的存储空间，并且宁可点界面也不想写 Rclone 配置文件的人。

**止步之处：** 没有基于内容的去重。一个 2 GB 存档保十份，就是吃掉你 Drive 配额的 20 GB；而且网盘同步的是文件而不是游戏会话，你取回来的只是文件夹当时的样子。

## Game Backup Monitor

以 Windows 为主，也是整个门类的鼻祖。GBM 盯着游戏进程，等你退出时用 7-Zip 压缩存档，并保留一份编号的历史。

**适合：** 只有一台 Windows 电脑，想要一份压缩好的本地归档、完全不用动脑的人。

**止步之处：** 它是备份工具，不是同步工具。把归档弄到第二台机器上是你自己的事，而 Steam Deck / SteamOS 也不是它的主场。

## Aletheia

这一组里最新的一款，AGPL 许可，而且专攻别人都只覆盖了一半的那块：启动器。Heroic、itch.io、Lutris、Steam、GOG Galaxy 和 Xbox，覆盖 Windows、Linux 和 macOS。

**适合：** 游戏库散落在其他工具识别得不好的启动器上，尤其是 Xbox / Game Pass 和 Heroic。

**止步之处：** 这是一个年轻的项目，范围也是刻意收窄的。功能就是备份和还原，背后并没有一个带版本的云。

## SaveSync

唯一的商业产品，在 Steam 上买断制出售，以 Windows 为主。它的巧思在于：它瞄准的并不是"你和你的两台电脑"，而是联机合作。存档会存进私有且不公开列出的 Steam 创意工坊条目，好让朋友把你的《Valheim》或《Factorio》世界拉走；另外也有局域网同步。

**适合：** 你要解决的问题是"朋友开房，我需要他那份存档"，而不是"让我的存档跟着我走"。

**止步之处：** 闭源、限 Windows、把 Steam 当作传输通道，而且支持的是一份联机游戏清单，不是你拥有的一切。

## 关于 EmuDeck 的一点说明

这类讨论里常常会提到 EmuDeck，但它并不是通常意义上的竞品：它是 Steam Deck 上的模拟器安装与配置工具，所提供的同步只是附在这份工作上的便利功能（用 Rclone 对接网盘，而且仅限模拟器存档）。它和上面这些工具有重叠，却不是同一类东西：EmuDeck 负责把模拟器给你装好配好，这里的工具负责照看整个游戏库的存档。确实有人把 EmuDeck 和其中一款搭配着用，那是合理的组合，并不重复。

## Hoard

Hoard 以一次游戏会话作为单位。引擎作为后台服务运行——\`hoardd\`，没有窗口，所以在 SteamOS 的游戏模式下照样工作——它会察觉你已经不玩了，然后在那一刻拍下快照，而不是在游戏进行中对每一次文件写入做出反应。

- **按会话的版本历史。** 每一次会话都是一个可以回退到的版本，哪怕是在硬盘故障或者全新安装之后。
- **基于内容哈希的去重。** 一个 2 GB 存档的十个版本大约只占 2 GB，而不是 20 GB。传输使用 zstd 压缩。
- **上传和下载都做 SHA-256 校验。** 损坏会在覆盖掉一个完好存档之前被抓出来。任何东西都不会被悄悄覆盖——整个设计就是围着这一点转的。
- **云端或自托管，同一个二进制。** Hoard Cloud 有免费额度（2 GB、3 台设备、完整历史）。或者你用 Docker Compose 自己跑 \`hoard-server\`，对接任何兼容 S3 的存储——MinIO、Garage、Backblaze B2——不需要账号，也没有配额。AGPL-3.0。
- **Windows、Linux、macOS**，另外还有一个无界面的命令行版本，适合 Steam Deck 或服务器。
- **模拟器支持处于测试阶段：** PCSX2、RPCS3、Dolphin、Cemu、Ryujinx、RetroArch、DuckStation、PPSSPP 等以预设形式提供。

## 决定 Steam Deck ↔ PC 同步成败的那个细节

不管你最后选哪款工具，这一点都值得知道。Steam 游戏的云存档位于 \`<AppID>/remote/\`，而它*上一层*的文件夹里放着 \`remotecache.vdf\`、成就状态、统计数据和游戏时长计数器——这些东西在你的 Deck 和台式机上本来就应该不一样。

同步父文件夹，你就会在两台从未在任何一个存档上产生分歧的机器之间，制造出永久的冲突。Hoard 跟踪的是 \`remote/\`，不是父文件夹。任何允许你手动指定文件夹的工具都可以照此设置；当一套同步配置莫名其妙地不断报冲突时，这也是第一个该去检查的地方。

## Hoard 输在哪里

- **它需要一台服务器。** 云端账号也好，自己的机器也罢，总归是基础设施；而 OpenSave 或 Ludusavi 一台都不需要。
- **模拟器支持还在测试阶段。** 便携式安装和各家模拟器的怪癖仍然会绊到它，某些启动器和模拟器的边缘情况，今天 Aletheia 和 OpenSave 处理得更好。
- **macOS 几乎没在真机上验证过。** 能编译也能跑，但没有人在上面长期用过几个月。
- **它还年轻。** Ludusavi 和 Game Backup Monitor 背后有好几年的问题反馈积累，Hoard 没有；对于一个要守着 200 小时存档的软件来说，这个差距不轻。
- **它不做联机存档共享。** 想把一个世界递给朋友，那是 SaveSync 的活儿，不是 Hoard 的。

## 对比表

| 工具 | 设备之间自动同步 | 存档放在哪里 | 历史 | 平台 | 许可 |
|---|---|---|---|---|---|
| **Hoard** | 是，按游戏会话 | Hoard Cloud 或你自己的服务器（兼容 S3） | 按会话版本化，带去重 | Win · Linux · macOS · Deck | AGPL-3.0，有免费额度 |
| **Ludusavi** | 手动，或你自己搭的 Rclone | 本地，外加你的 Rclone 远端 | 带版本的本地备份 | Win · Linux · macOS | 免费开源 |
| **Syncthing** | 是，持续镜像 | 只在你的设备上 | 按文件的版本保留 | 全平台 | 免费开源 |
| **OpenSave** | 是，点对点 | 你的设备，可选云端镜像 | 快照与分支 | Win · Linux · Deck | MIT |
| **OpenCloudSaves** | 是，经由你的网盘 | OneDrive / Drive / Dropbox / Nextcloud | 取决于网盘保留什么 | Win · Linux · macOS | 免费开源 |
| **Game Backup Monitor** | 否 | 本地 7-Zip 归档 | 编号备份 | Windows | 免费开源 |
| **Aletheia** | 按启动器备份与还原 | 你自己的存储 | 备份 | Win · Linux · macOS | AGPL-3.0 |
| **SaveSync** | 是，还能和朋友同步 | 私有的 Steam 创意工坊条目 | 视应用而定 | Windows | 付费闭源 |

## 那么选哪个

如果你只想保住一台机器，别的都不管，选 Ludusavi 或 Game Backup Monitor。如果你无论如何都不想要账号，而且设备通常同时开着，选 OpenSave。如果存档应该落进一个你已经在付费的 Drive 文件夹里，选 OpenCloudSaves。如果你要和朋友共享一个联机世界，选 SaveSync。

如果你想要的是备份*和*跨 PC 与 Steam Deck 的同步自己就发生，每一次会话都有一个可以回退的版本，并且保留把整套东西自托管的选项——那正是 Hoard 存在的理由。[下载它](/download)，或者先读一读[如何用 Docker 自托管](/guides/self-host-hoard)。如果你正在权衡的对手就是 Ludusavi，这里还有一篇[更详细的对比](/guides/ludusavi-alternative)。
`,Ze=`---
title: "Ludusavi-Alternative: automatische Cloud-Synchronisierung für deine Spielstände"
description: "Ein fairer Vergleich von Ludusavi und Hoard. Ludusavi ist ein großartiges Open-Source-Tool für lokale Backups; Hoard ergänzt verwaltete Cloud-Synchronisierung und versionierte Historie über alle deine PCs — mit denselben Speicherort-Daten."
order: 5
updated: 2026-06-28
---

Wenn du nach einer Möglichkeit suchst, deine Spielstände zu sichern und zu synchronisieren, bist du wahrscheinlich auf **Ludusavi** gestoßen — und es ist hervorragend. Diese Anleitung ist ein ehrlicher Vergleich, damit du das richtige Tool wählst, und erklärt, wo Hoard passt, wenn du automatische Cloud-Synchronisierung über mehrere Geräte willst.

## Was Ludusavi gut macht

Ludusavi ist ein kostenloses Open-Source-Tool (von mtkennerly), um PC-Spielstände unter Windows, macOS und Linux zu sichern und wiederherzustellen. Es hat eine aufgeräumte GUI und eine CLI, findet Stände für Tausende Spiele automatisch, führt versionierte lokale Backups und kann diese über **Rclone** in eine eigene Cloud übertragen (Google Drive, Dropbox und viele andere). Wenn du volle Kontrolle und ein Do-it-yourself-Setup willst, ist Ludusavi eine fantastische Wahl — und völlig kostenlos.

Hoard will das nicht ersetzen. Tatsächlich nutzt **Hoard dieselbe Community-Datenbank für Speicherorte, auf die sich auch Ludusavi stützt**, um zu finden, wo jedes Spiel seine Stände ablegt — die Erkennungsqualität ist also gleichwertig.

## Worin sich Hoard unterscheidet

Die Lücke, auf die die meisten bei jedem lokalen Tool stoßen, ist die **Synchronisierung über Geräte hinweg**. Mit Ludusavi machst du das selbst: Backup planen, Rclone-Remote konfigurieren, dann auf dem anderen PC wiederherstellen, bevor du spielst. Das funktioniert, ist aber manuell.

Hoard macht daraus **verwaltete Cloud-Synchronisierung**:

- **Anmelden und loslegen.** Keine Rclone-Remotes, keine Skripte. Hoard lädt deinen Stand nach dem Spielen hoch und vor dem Start die neueste Version herunter, auf jedem PC deines Kontos.
- **Versionierte Historie in der Cloud.** Jedes Backup bleibt erhalten, du kannst also zu jedem früheren Stand zurück — sogar nach einem Festplattenausfall oder einer Neuinstallation.
- **Konfliktbewusst.** Hoard vergleicht Zeitstempel und behält eine lokale Kopie von allem, was es ersetzt, sodass eine Synchronisierung nie stillschweigend Fortschritt zerstört.
- **Weiterhin Open Source und selbst hostbar.** Wie bei Ludusavi gibt es keine Bindung — nutze Hoard Cloud oder hoste den Server selbst.

## Was solltest du wählen?

- Wähle **Ludusavi**, wenn du ein kostenloses, lokal orientiertes Backup-Tool willst und gern deine eigene Cloud mit Rclone einrichtest.
- Wähle **Hoard**, wenn Backups *und* automatische Synchronisierung über PCs einfach funktionieren sollen, mit versionierter Cloud-Historie und der Option, selbst zu hosten.

Viele beginnen mit Ludusavi für lokale Backups und wechseln zu Hoard, sobald sie dieselben Spiele auf mehr als einem Gerät spielen. Wenn das auf dich zutrifft, siehe [wie du Spielstände über PCs synchronisierst](/guides/sync-game-saves-across-pcs) oder [lade einfach Hoard herunter](/download) und melde dich an.
`,Qe=`---
title: "Ludusavi alternative: automatic cloud sync for your game saves"
description: "A fair comparison of Ludusavi and Hoard. Ludusavi is a great open-source local backup tool; Hoard adds managed cloud sync and versioned history across all your PCs — using the same save-location data."
order: 5
updated: 2026-06-28
---

If you're looking for a way to back up and sync your game saves, you've probably found **Ludusavi** — and it's excellent. This guide is an honest comparison so you can pick the right tool, and it explains where Hoard fits if you want automatic cloud sync across machines.

## What Ludusavi does well

Ludusavi is a free, open-source tool (made by mtkennerly) for backing up and restoring PC game saves on Windows, macOS and Linux. It has a clean GUI and a CLI, finds saves for thousands of games automatically, keeps versioned local backups, and can push those backups to a cloud you own by configuring **Rclone** (Google Drive, Dropbox, and many others). If you want full control and a do-it-yourself setup, Ludusavi is a fantastic choice — and it's completely free.

Hoard isn't here to replace that. In fact, **Hoard uses the same community save-location database that Ludusavi relies on** to locate where each game stores its saves, so detection quality is on par.

## Where Hoard is different

The gap most people hit with any local-first tool is **syncing across devices**. With Ludusavi you do it yourself: schedule a backup, configure an Rclone remote, then restore on the other PC before you play. That works, but it's manual.

Hoard turns that into **managed cloud sync**:

- **Sign in and go.** No Rclone remotes, no scripts. Hoard uploads your save after you finish playing and downloads the latest before you start, on every PC on your account.
- **Versioned history in the cloud.** Every backup is kept, so you can roll back to any earlier save — even after a disk failure or a fresh install.
- **Conflict-aware.** Hoard compares timestamps and keeps a local copy of anything it replaces, so a sync never silently destroys progress.
- **Still open source and self-hostable.** Like Ludusavi, you're not locked in — run Hoard Cloud or host the server yourself.

## Which should you choose?

- Choose **Ludusavi** if you want a free, local-first backup tool and you're happy to wire up your own cloud with Rclone.
- Choose **Hoard** if you want backups *and* automatic sync across PCs to just work, with a versioned cloud history, while keeping the option to self-host.

Many people start with Ludusavi for local backups and move to Hoard once they're playing the same games on more than one machine. If that's you, see [how to sync game saves across PCs](/guides/sync-game-saves-across-pcs) or just [download Hoard](/download) and sign in.
`,Je=`---
title: "Alternativa a Ludusavi: sincronización automática de partidas en la nube"
description: "Comparativa justa entre Ludusavi y Hoard. Ludusavi es una gran herramienta open source de copia local; Hoard añade sincronización gestionada en la nube e historial versionado entre todos tus PC, usando los mismos datos de ubicación de partidas."
order: 5
updated: 2026-06-28
---

Si buscas una forma de hacer copia y sincronizar tus partidas guardadas, seguramente has encontrado **Ludusavi**, y es excelente. Esta guía es una comparativa honesta para que elijas la herramienta adecuada, y explica dónde encaja Hoard si quieres sincronización automática en la nube entre equipos.

## Qué hace bien Ludusavi

Ludusavi es una herramienta gratuita y open source (creada por mtkennerly) para hacer copias y restaurar partidas de PC en Windows, macOS y Linux. Tiene una interfaz limpia y una CLI, detecta automáticamente las partidas de miles de juegos, guarda copias locales versionadas y puede subir esas copias a una nube tuya configurando **Rclone** (Google Drive, Dropbox y muchas más). Si quieres control total y un montaje a tu medida, Ludusavi es una opción fantástica, y es completamente gratis.

Hoard no viene a reemplazar eso. De hecho, **Hoard usa la misma base de datos comunitaria de ubicación de partidas en la que se apoya Ludusavi** para localizar dónde guarda cada juego sus saves, así que la calidad de detección está a la par.

## En qué se diferencia Hoard

El punto donde la mayoría se atasca con cualquier herramienta local es **sincronizar entre dispositivos**. Con Ludusavi lo haces tú: programas una copia, configuras un remoto de Rclone y luego restauras en el otro PC antes de jugar. Funciona, pero es manual.

Hoard convierte eso en **sincronización gestionada en la nube**:

- **Inicia sesión y listo.** Sin remotos de Rclone, sin scripts. Hoard sube tu partida cuando terminas de jugar y descarga la última antes de empezar, en todos los PC de tu cuenta.
- **Historial versionado en la nube.** Se conserva cada copia, así que puedes volver a cualquier partida anterior, incluso tras un fallo de disco o una instalación limpia.
- **Tiene en cuenta los conflictos.** Hoard compara fechas y guarda una copia local de lo que reemplaza, así que una sincronización nunca destruye progreso en silencio.
- **Sigue siendo open source y autoalojable.** Como Ludusavi, no hay bloqueo: usa Hoard Cloud o aloja el servidor tú mismo.

## ¿Cuál elegir?

- Elige **Ludusavi** si quieres una herramienta de copia gratuita y local y no te importa montar tu propia nube con Rclone.
- Elige **Hoard** si quieres que la copia *y* la sincronización entre PC funcionen solas, con historial versionado en la nube, sin renunciar a poder autoalojarte.

Mucha gente empieza con Ludusavi para copias locales y pasa a Hoard cuando juega a los mismos juegos en más de un equipo. Si es tu caso, mira [cómo sincronizar partidas entre PC](/guides/sync-game-saves-across-pcs) o simplemente [descarga Hoard](/download) e inicia sesión.
`,Ye=`---
title: "Alternative à Ludusavi : synchronisation cloud automatique de vos parties"
description: "Une comparaison équitable entre Ludusavi et Hoard. Ludusavi est un excellent outil open source de sauvegarde locale ; Hoard ajoute une synchro cloud gérée et un historique versionné sur tous vos PC — avec les mêmes données d'emplacement."
order: 5
updated: 2026-06-28
---

Si vous cherchez un moyen de sauvegarder et synchroniser vos parties, vous avez sans doute trouvé **Ludusavi** — et il est excellent. Ce guide est une comparaison honnête pour vous aider à choisir le bon outil, et explique où Hoard s'inscrit si vous voulez une synchro cloud automatique entre machines.

## Ce que Ludusavi fait bien

Ludusavi est un outil gratuit et open source (créé par mtkennerly) pour sauvegarder et restaurer les parties PC sous Windows, macOS et Linux. Il a une interface soignée et une CLI, trouve automatiquement les sauvegardes de milliers de jeux, conserve des sauvegardes locales versionnées, et peut envoyer ces sauvegardes vers un cloud qui vous appartient en configurant **Rclone** (Google Drive, Dropbox et bien d'autres). Si vous voulez un contrôle total et un montage fait main, Ludusavi est un choix fantastique — et entièrement gratuit.

Hoard n'est pas là pour le remplacer. En fait, **Hoard utilise la même base de données communautaire d'emplacements que celle sur laquelle s'appuie Ludusavi** pour localiser où chaque jeu range ses sauvegardes : la qualité de détection est donc équivalente.

## En quoi Hoard est différent

Le point où la plupart bloquent avec tout outil local, c'est la **synchronisation entre appareils**. Avec Ludusavi, vous la faites vous-même : planifier une sauvegarde, configurer un distant Rclone, puis restaurer sur l'autre PC avant de jouer. Ça marche, mais c'est manuel.

Hoard transforme cela en **synchro cloud gérée** :

- **Connectez-vous et c'est parti.** Pas de distants Rclone, pas de scripts. Hoard envoie votre sauvegarde après le jeu et télécharge la dernière version avant que vous commenciez, sur chaque PC de votre compte.
- **Historique versionné dans le cloud.** Chaque sauvegarde est conservée, vous pouvez donc revenir à n'importe quelle sauvegarde antérieure — même après une panne de disque ou une installation neuve.
- **Gestion des conflits.** Hoard compare les horodatages et conserve une copie locale de tout ce qu'il remplace, donc une synchro ne détruit jamais la progression en silence.
- **Toujours open source et auto-hébergeable.** Comme Ludusavi, pas de verrouillage — utilisez Hoard Cloud ou hébergez le serveur vous-même.

## Lequel choisir ?

- Choisissez **Ludusavi** si vous voulez un outil de sauvegarde gratuit et local et que configurer votre propre cloud avec Rclone ne vous dérange pas.
- Choisissez **Hoard** si vous voulez que la sauvegarde *et* la synchro entre PC fonctionnent toutes seules, avec un historique cloud versionné, tout en gardant l'option de l'auto-hébergement.

Beaucoup commencent avec Ludusavi pour les sauvegardes locales et passent à Hoard dès qu'ils jouent aux mêmes jeux sur plus d'une machine. Si c'est votre cas, voir [comment synchroniser vos parties entre PC](/guides/sync-game-saves-across-pcs) ou simplement [téléchargez Hoard](/download) et connectez-vous.
`,ea=`---
title: "Alternativa a Ludusavi: sincronizzazione cloud automatica dei salvataggi"
description: "Un confronto equo tra Ludusavi e Hoard. Ludusavi è un ottimo strumento open source di backup locale; Hoard aggiunge sincronizzazione cloud gestita e cronologia versionata su tutti i tuoi PC — usando gli stessi dati di posizione."
order: 5
updated: 2026-06-28
---

Se cerchi un modo per fare backup e sincronizzare i tuoi salvataggi, probabilmente hai trovato **Ludusavi** — ed è eccellente. Questa guida è un confronto onesto per aiutarti a scegliere lo strumento giusto, e spiega dove si inserisce Hoard se vuoi sincronizzazione cloud automatica tra macchine.

## Cosa fa bene Ludusavi

Ludusavi è uno strumento gratuito e open source (creato da mtkennerly) per fare backup e ripristinare i salvataggi PC su Windows, macOS e Linux. Ha una GUI pulita e una CLI, trova automaticamente i salvataggi di migliaia di giochi, conserva backup locali versionati e può inviare quei backup a un cloud tuo configurando **Rclone** (Google Drive, Dropbox e molti altri). Se vuoi pieno controllo e un setup fai-da-te, Ludusavi è una scelta fantastica — e completamente gratuita.

Hoard non vuole sostituirlo. Anzi, **Hoard usa lo stesso database comunitario di posizioni su cui si basa Ludusavi** per individuare dove ogni gioco conserva i salvataggi, quindi la qualità del rilevamento è alla pari.

## In cosa Hoard è diverso

Il punto in cui quasi tutti si bloccano con qualsiasi strumento locale è la **sincronizzazione tra dispositivi**. Con Ludusavi la fai tu: programmare un backup, configurare un remoto Rclone, poi ripristinare sull'altro PC prima di giocare. Funziona, ma è manuale.

Hoard la trasforma in **sincronizzazione cloud gestita**:

- **Accedi e via.** Niente remoti Rclone, niente script. Hoard carica il salvataggio dopo che giochi e scarica l'ultima versione prima che inizi, su ogni PC del tuo account.
- **Cronologia versionata nel cloud.** Ogni backup viene conservato, quindi puoi tornare a qualsiasi salvataggio precedente — anche dopo un guasto del disco o un'installazione pulita.
- **Consapevole dei conflitti.** Hoard confronta i timestamp e conserva una copia locale di tutto ciò che sostituisce, così una sincronizzazione non distrugge mai i progressi in silenzio.
- **Sempre open source e self-hostable.** Come Ludusavi, nessun vincolo — usa Hoard Cloud o ospita il server tu stesso.

## Quale scegliere?

- Scegli **Ludusavi** se vuoi uno strumento di backup gratuito e locale e non ti dispiace montare il tuo cloud con Rclone.
- Scegli **Hoard** se vuoi che backup *e* sincronizzazione tra PC funzionino da soli, con una cronologia cloud versionata, mantenendo l'opzione del self-hosting.

Molti iniziano con Ludusavi per i backup locali e passano a Hoard quando giocano agli stessi giochi su più di una macchina. Se è il tuo caso, vedi [come sincronizzare i salvataggi tra PC](/guides/sync-game-saves-across-pcs) o semplicemente [scarica Hoard](/download) e accedi.
`,aa=`---
title: "Ludusavi の代替：セーブデータの自動クラウド同期"
description: "Ludusavi と Hoard の公平な比較。Ludusavi はローカルバックアップに優れたオープンソースツール。Hoard は同じ位置データを使いつつ、すべての PC でマネージドなクラウド同期と世代履歴を追加します。"
order: 5
updated: 2026-06-28
---

セーブデータをバックアップして同期する方法を探しているなら、おそらく **Ludusavi** にたどり着いたはずです――そして優れたツールです。このガイドは適切なツールを選べるよう正直に比較し、端末間での自動クラウド同期が欲しい場合に Hoard がどこに位置づくかを説明します。

## Ludusavi の優れている点

Ludusavi は Windows、macOS、Linux で PC のセーブをバックアップ・復元する無料のオープンソースツール（mtkennerly 作）です。すっきりした GUI と CLI を備え、数千のゲームのセーブを自動で見つけ、世代管理されたローカルバックアップを保持し、**Rclone** を設定すれば自分のクラウド（Google Drive、Dropbox など）へバックアップを送れます。完全な制御と自前のセットアップが欲しいなら、Ludusavi は素晴らしい選択肢で、しかも完全に無料です。

Hoard はそれを置き換えるためのものではありません。実際、**Hoard は Ludusavi が依拠しているのと同じコミュニティのセーブ位置データベース** を使って各ゲームのセーブ場所を特定するため、検出の品質は同等です。

## Hoard が異なる点

ローカル中心のツールで多くの人がぶつかる壁が、**端末間の同期** です。Ludusavi では自分で行います。バックアップをスケジュールし、Rclone のリモートを設定し、プレイ前にもう一方の PC で復元する。動作はしますが、手作業です。

Hoard はこれを **マネージドなクラウド同期** に変えます。

- **サインインするだけ。** Rclone のリモートもスクリプトも不要。Hoard はプレイ後にセーブをアップロードし、開始前に最新版をダウンロードします。アカウント内のすべての PC で行われます。
- **クラウド上の世代履歴。** すべてのバックアップが保持されるので、以前のどのセーブにも巻き戻せます――ディスク故障やクリーンインストールの後でも。
- **競合を認識。** Hoard はタイムスタンプを比較し、置き換えるものすべてのローカルコピーを保持するため、同期が黙って進行を壊すことはありません。
- **引き続きオープンソースでセルフホスト可能。** Ludusavi と同様にロックインはありません――Hoard Cloud を使うか、サーバーを自分でホストできます。

## どちらを選ぶべきか

- 無料でローカル中心のバックアップツールが欲しく、Rclone で自分のクラウドを組むのが苦でないなら **Ludusavi** を選びましょう。
- バックアップ *と* PC 間の同期が手間なく動き、世代付きのクラウド履歴を持ちつつ、セルフホストの選択肢も残したいなら **Hoard** を選びましょう。

多くの人はローカルバックアップに Ludusavi で始め、複数のマシンで同じゲームをプレイするようになると Hoard に移行します。あなたがそうなら、[PC 間でセーブを同期する方法](/guides/sync-game-saves-across-pcs) をご覧いただくか、[Hoard をダウンロード](/download) してサインインしてください。
`,na=`---
title: "Alternativa ao Ludusavi: sincronização automática de saves na nuvem"
description: "Uma comparação justa entre o Ludusavi e o Hoard. O Ludusavi é uma excelente ferramenta open source de backup local; o Hoard acrescenta sincronização na nuvem gerida e histórico versionado em todos os teus PCs — usando os mesmos dados de localização."
order: 5
updated: 2026-06-28
---

Se procuras uma forma de fazer backup e sincronizar os teus saves, é provável que tenhas encontrado o **Ludusavi** — e é excelente. Este guia é uma comparação honesta para te ajudar a escolher a ferramenta certa, e explica onde o Hoard se encaixa se quiseres sincronização na nuvem automática entre máquinas.

## O que o Ludusavi faz bem

O Ludusavi é uma ferramenta gratuita e open source (criada por mtkennerly) para fazer backup e restaurar saves de PC em Windows, macOS e Linux. Tem uma GUI limpa e uma CLI, encontra automaticamente os saves de milhares de jogos, guarda backups locais versionados e pode enviar esses backups para uma nuvem tua configurando o **Rclone** (Google Drive, Dropbox e muitos outros). Se queres controlo total e uma configuração faz-tu-mesmo, o Ludusavi é uma escolha fantástica — e completamente gratuita.

O Hoard não vem substituir isso. Na verdade, **o Hoard usa a mesma base de dados comunitária de localizações em que o Ludusavi se apoia** para localizar onde cada jogo guarda os saves, por isso a qualidade da deteção está ao mesmo nível.

## Em que o Hoard é diferente

O ponto onde a maioria esbarra com qualquer ferramenta local é a **sincronização entre dispositivos**. Com o Ludusavi fá-lo tu: agendar um backup, configurar um remoto Rclone, e depois restaurar no outro PC antes de jogar. Funciona, mas é manual.

O Hoard transforma isso em **sincronização na nuvem gerida**:

- **Inicia sessão e pronto.** Sem remotos Rclone, sem scripts. O Hoard envia o teu save depois de jogares e descarrega a versão mais recente antes de começares, em cada PC da tua conta.
- **Histórico versionado na nuvem.** Cada backup é guardado, por isso podes voltar a qualquer save anterior — mesmo depois de uma falha de disco ou de uma instalação limpa.
- **Tem em conta os conflitos.** O Hoard compara os timestamps e guarda uma cópia local de tudo o que substitui, por isso uma sincronização nunca destrói progresso em silêncio.
- **Continua open source e self-hostable.** Como o Ludusavi, não há aprisionamento — usa o Hoard Cloud ou aloja o servidor tu mesmo.

## Qual deves escolher?

- Escolhe o **Ludusavi** se queres uma ferramenta de backup gratuita e local e não te importas de montar a tua própria nuvem com o Rclone.
- Escolhe o **Hoard** se queres que o backup *e* a sincronização entre PCs simplesmente funcionem, com um histórico na nuvem versionado, mantendo a opção de self-hosting.

Muita gente começa com o Ludusavi para backups locais e passa para o Hoard quando joga os mesmos jogos em mais de uma máquina. Se é o teu caso, vê [como sincronizar saves entre PCs](/guides/sync-game-saves-across-pcs) ou simplesmente [descarrega o Hoard](/download) e inicia sessão.
`,oa=`---
title: "Ludusavi 替代方案：游戏存档的自动云同步"
description: "对 Ludusavi 与 Hoard 的公平对比。Ludusavi 是出色的开源本地备份工具；Hoard 在使用相同位置数据的同时，为你的所有 PC 增加托管式云同步与版本历史。"
order: 5
updated: 2026-06-28
---

如果你在寻找备份和同步游戏存档的方法，那你很可能已经找到了 **Ludusavi**——它非常出色。本指南是一份诚实的对比，帮助你选对工具，并说明当你需要跨机器自动云同步时，Hoard 的定位在哪里。

## Ludusavi 的优点

Ludusavi 是一款免费的开源工具（由 mtkennerly 开发），可在 Windows、macOS 和 Linux 上备份与还原 PC 游戏存档。它有简洁的图形界面和命令行，能自动找到数千款游戏的存档，保留带版本的本地备份，并可通过配置 **Rclone** 把这些备份推送到你自己的云端（Google Drive、Dropbox 等）。如果你想要完全掌控和自己动手的方案，Ludusavi 是绝佳选择——而且完全免费。

Hoard 并非来取代它。事实上，**Hoard 使用与 Ludusavi 所依赖的相同的社区存档位置数据库**来定位每款游戏存档的位置，因此检测质量不相上下。

## Hoard 的不同之处

大多数人在任何以本地为主的工具上都会遇到的瓶颈，是**跨设备同步**。用 Ludusavi 时你得自己来：安排备份、配置 Rclone 远端，然后在玩之前在另一台 PC 上还原。这能行，但是手动的。

Hoard 把它变成**托管式云同步**：

- **登录即用。** 无需 Rclone 远端，无需脚本。Hoard 会在你玩完后上传存档，并在你开始前下载最新版本，覆盖你账号下的每台 PC。
- **云端版本历史。** 每个备份都会保留，因此你可以回退到任意较早的存档——即使在磁盘故障或全新安装之后。
- **冲突感知。** Hoard 会比较时间戳，并为它替换的一切保留本地副本，因此同步绝不会悄无声息地破坏进度。
- **依然开源且可自托管。** 与 Ludusavi 一样，没有锁定——使用 Hoard Cloud，或自己托管服务器。

## 你该选哪个？

- 如果你想要一款免费、以本地为主的备份工具，并且不介意用 Rclone 搭建自己的云端，就选 **Ludusavi**。
- 如果你想让备份*和*跨 PC 同步都自动生效，拥有带版本的云端历史，同时保留自托管的选项，就选 **Hoard**。

很多人先用 Ludusavi 做本地备份，等到在不止一台机器上玩同样的游戏时再转向 Hoard。如果这就是你，请见[如何在多台 PC 之间同步存档](/guides/sync-game-saves-across-pcs)，或直接[下载 Hoard](/download) 并登录。
`,sa=`---
title: "So stellst du einen alten Spielstand wieder her"
description: "Falsche Entscheidung getroffen, Datei beschädigt oder Neustart gewünscht? Springe mit Hoards Cloud-Historie zu jeder früheren Version deines Spielstands zurück — auch zu Ständen, die mit Tools wie Ludusavi gesichert wurden."
order: 3
updated: 2026-06-28
---

Eine schlechte Entscheidung im Spiel, eine beschädigte Datei oder ein verpfuschter Mod — manchmal musst du einfach zurück. Da Hoard eine vollständige Versionshistorie jedes Stands führt, dauert die Wiederherstellung eines früheren nur Sekunden.

## Eine frühere Version wiederherstellen

1. Öffne **Hoard** und gehe zum Spiel in deiner **Bibliothek**.
2. Öffne den Reiter **Historie**. Du siehst jedes Backup mit Datum und Größe.
3. Wähle die gewünschte Version und klicke auf **Wiederherstellen**.
4. Hoard schreibt diesen Snapshot zurück in den Speicherordner des Spiels. Dein aktueller Stand wird zuerst gesichert, die Wiederherstellung ist also umkehrbar.

## Auf einem neuen oder neu installierten PC wiederherstellen

1. Installiere Hoard und melde dich mit deinem Konto an.
2. Füge das Spiel zu deiner Bibliothek hinzu — Hoard findet das passende Cloud-Backup.
3. Stelle die neueste Version oder eine ältere wieder her und spiele weiter.

Da Hoard Speicherordner mit derselben Community-Datenbank wie Ludusavi findet, weiß es selbst bei einer Neuinstallation, wohin ein wiederhergestellter Stand gehört — ohne manuelle Pfadsuche.

## Tipp

Wiederherstellungen sind nie zerstörerisch: Der ersetzte Stand wird zuerst als neue Version erfasst, du kannst eine Wiederherstellung also immer rückgängig machen, indem du den vorherigen Eintrag wiederherstellst. Hast du bisher nur lokale Backups geführt (etwa mit Ludusavi), ergänzt der Wechsel zu Hoard eine geräteunabhängige, versionierte Historie, aus der du selbst nach einem Festplattenausfall wiederherstellen kannst.
`,ia=`---
title: "How to restore an old game save"
description: "Made a wrong move, corrupted a file or want a fresh start? Roll back to any previous version of your game save with Hoard's cloud history — including saves backed up by tools like Ludusavi."
order: 3
updated: 2026-06-28
---

A bad decision in-game, a corrupted file, or a botched mod — sometimes you just need to go back. Because Hoard keeps a full version history of every save, restoring an earlier one takes seconds.

## Restore a previous version

1. Open **Hoard** and go to the game in your **Library**.
2. Open its **History** tab. You'll see every backup with its date and size.
3. Pick the version you want and choose **Restore**.
4. Hoard writes that snapshot back into the game's save folder. Your current save is backed up first, so the restore itself is reversible.

## Restore on a new or reinstalled PC

1. Install Hoard and sign in with your account.
2. Add the game to your Library — Hoard finds the matching cloud backup.
3. Restore the latest version, or any older one, and keep playing.

Because Hoard locates save folders using the same community database as Ludusavi, it knows where to put a restored save even on a fresh install — no manual path hunting.

## Tip

Restores are never destructive: the save you replace is captured as a new version first, so you can always undo a restore by restoring the previous entry. If you've only ever kept local backups (for example with Ludusavi), moving to Hoard adds an off-machine, versioned history you can restore from even after a disk failure.
`,ta=`---
title: "Cómo restaurar una partida guardada anterior"
description: "¿Tomaste una mala decisión, se corrompió un archivo o quieres empezar de cero? Vuelve a cualquier versión anterior de tu partida con el historial en la nube de Hoard, incluidas copias hechas con herramientas como Ludusavi."
order: 3
updated: 2026-06-28
---

Una mala decisión en el juego, un archivo corrupto o un mod que lo rompe todo: a veces solo necesitas volver atrás. Como Hoard guarda un historial completo de versiones de cada partida, restaurar una anterior lleva segundos.

## Restaurar una versión anterior

1. Abre **Hoard** y ve al juego en tu **Biblioteca**.
2. Abre su pestaña **Historial**. Verás cada copia con su fecha y tamaño.
3. Elige la versión que quieras y pulsa **Restaurar**.
4. Hoard vuelve a escribir esa instantánea en la carpeta de guardado del juego. Tu partida actual se respalda primero, así que la restauración es reversible.

## Restaurar en un PC nuevo o reinstalado

1. Instala Hoard e inicia sesión con tu cuenta.
2. Añade el juego a tu Biblioteca: Hoard encuentra la copia en la nube correspondiente.
3. Restaura la última versión, o cualquiera anterior, y sigue jugando.

Como Hoard localiza las carpetas de guardado con la misma base de datos comunitaria que Ludusavi, sabe dónde colocar una partida restaurada incluso en una instalación limpia, sin que busques rutas a mano.

## Consejo

Las restauraciones nunca son destructivas: la partida que reemplazas se guarda antes como una nueva versión, así que siempre puedes deshacer una restauración volviendo a la entrada anterior. Si hasta ahora solo guardabas copias en local (por ejemplo con Ludusavi), pasar a Hoard añade un historial versionado y fuera del equipo desde el que puedes restaurar incluso tras un fallo de disco.
`,ra=`---
title: "Comment restaurer une ancienne sauvegarde"
description: "Mauvais choix, fichier corrompu ou envie de repartir de zéro ? Revenez à n'importe quelle version précédente de votre sauvegarde grâce à l'historique cloud de Hoard — y compris des sauvegardes faites avec des outils comme Ludusavi."
order: 3
updated: 2026-06-28
---

Une mauvaise décision en jeu, un fichier corrompu ou un mod qui casse tout — parfois, il faut juste revenir en arrière. Comme Hoard conserve un historique complet des versions de chaque sauvegarde, en restaurer une plus ancienne prend quelques secondes.

## Restaurer une version précédente

1. Ouvrez **Hoard** et allez au jeu dans votre **Bibliothèque**.
2. Ouvrez son onglet **Historique**. Vous verrez chaque sauvegarde avec sa date et sa taille.
3. Choisissez la version voulue et cliquez sur **Restaurer**.
4. Hoard réécrit cet instantané dans le dossier de sauvegarde du jeu. Votre sauvegarde actuelle est d'abord sauvegardée, la restauration est donc réversible.

## Restaurer sur un PC neuf ou réinstallé

1. Installez Hoard et connectez-vous avec votre compte.
2. Ajoutez le jeu à votre Bibliothèque — Hoard trouve la sauvegarde cloud correspondante.
3. Restaurez la dernière version, ou une plus ancienne, et continuez à jouer.

Comme Hoard localise les dossiers de sauvegarde avec la même base communautaire que Ludusavi, il sait où placer une sauvegarde restaurée même sur une installation neuve — sans chasse manuelle au chemin.

## Astuce

Les restaurations ne sont jamais destructrices : la sauvegarde remplacée est d'abord capturée comme nouvelle version, vous pouvez donc toujours annuler une restauration en restaurant l'entrée précédente. Si vous n'aviez que des sauvegardes locales (par exemple avec Ludusavi), passer à Hoard ajoute un historique versionné hors machine, depuis lequel vous pouvez restaurer même après une panne de disque.
`,ua=`---
title: "Come ripristinare un vecchio salvataggio"
description: "Scelta sbagliata, file corrotto o voglia di ricominciare? Torna a qualsiasi versione precedente del tuo salvataggio con la cronologia cloud di Hoard — inclusi salvataggi fatti con strumenti come Ludusavi."
order: 3
updated: 2026-06-28
---

Una brutta decisione nel gioco, un file corrotto o una mod che rompe tutto — a volte devi solo tornare indietro. Poiché Hoard conserva una cronologia completa delle versioni di ogni salvataggio, ripristinarne uno precedente richiede pochi secondi.

## Ripristinare una versione precedente

1. Apri **Hoard** e vai al gioco nella tua **Libreria**.
2. Apri la scheda **Cronologia**. Vedrai ogni backup con data e dimensione.
3. Scegli la versione che vuoi e premi **Ripristina**.
4. Hoard riscrive quello snapshot nella cartella di salvataggio del gioco. Il salvataggio attuale viene salvato prima, quindi il ripristino è reversibile.

## Ripristinare su un PC nuovo o reinstallato

1. Installa Hoard e accedi con il tuo account.
2. Aggiungi il gioco alla Libreria — Hoard trova il backup cloud corrispondente.
3. Ripristina l'ultima versione, o una più vecchia, e continua a giocare.

Poiché Hoard individua le cartelle di salvataggio con lo stesso database comunitario di Ludusavi, sa dove mettere un salvataggio ripristinato anche su un'installazione pulita — senza cercare percorsi a mano.

## Suggerimento

I ripristini non sono mai distruttivi: il salvataggio che sostituisci viene prima catturato come nuova versione, quindi puoi sempre annullare un ripristino ripristinando la voce precedente. Se finora hai tenuto solo backup locali (ad esempio con Ludusavi), passare a Hoard aggiunge una cronologia versionata fuori dalla macchina, da cui puoi ripristinare anche dopo un guasto del disco.
`,da=`---
title: "古いセーブデータを復元する方法"
description: "判断を誤った、ファイルが壊れた、最初からやり直したい？ Hoard のクラウド履歴で、セーブデータの任意の過去バージョンに巻き戻せます。Ludusavi などのツールで取ったバックアップも含みます。"
order: 3
updated: 2026-06-28
---

ゲーム内での悪い決断、壊れたファイル、失敗した MOD――時にはただ巻き戻したいだけのことがあります。Hoard はすべてのセーブの完全なバージョン履歴を保持しているので、以前のものへの復元は数秒で済みます。

## 以前のバージョンを復元する

1. **Hoard** を開き、**ライブラリ** で対象のゲームに移動します。
2. その **履歴** タブを開きます。各バックアップが日付とサイズ付きで表示されます。
3. 復元したいバージョンを選び、**復元** を選択します。
4. Hoard はそのスナップショットをゲームのセーブフォルダーに書き戻します。現在のセーブが先にバックアップされるため、復元自体も元に戻せます。

## 新しい PC や再インストールした PC で復元する

1. Hoard をインストールし、自分のアカウントでサインインします。
2. ゲームをライブラリに追加します――Hoard が対応するクラウドバックアップを見つけます。
3. 最新版、または任意の古い版を復元して、プレイを続けます。

Hoard は Ludusavi と同じコミュニティデータベースでセーブフォルダーを特定するため、クリーンインストールでも復元先を把握しています。手動でパスを探す必要はありません。

## ヒント

復元が破壊的になることはありません。置き換えるセーブは先に新しいバージョンとして取り込まれるので、直前のエントリを復元すればいつでも復元を取り消せます。これまでローカルバックアップ（たとえば Ludusavi）しか持っていなかった場合、Hoard に移行するとマシン外の世代履歴が加わり、ディスク故障の後でもそこから復元できます。
`,la=`---
title: "Como restaurar um save antigo"
description: "Tomaste uma má decisão, corrompeste um ficheiro ou queres recomeçar? Volta a qualquer versão anterior do teu save com o histórico na nuvem do Hoard — incluindo saves feitos com ferramentas como o Ludusavi."
order: 3
updated: 2026-06-28
---

Uma má decisão no jogo, um ficheiro corrompido ou um mod que parte tudo — às vezes só precisas de voltar atrás. Como o Hoard guarda um histórico completo de versões de cada save, restaurar um anterior leva segundos.

## Restaurar uma versão anterior

1. Abre o **Hoard** e vai ao jogo na tua **Biblioteca**.
2. Abre o separador **Histórico**. Verás cada backup com data e tamanho.
3. Escolhe a versão que queres e carrega em **Restaurar**.
4. O Hoard volta a escrever esse snapshot na pasta de save do jogo. O teu save atual é guardado primeiro, por isso a restauração é reversível.

## Restaurar num PC novo ou reinstalado

1. Instala o Hoard e inicia sessão com a tua conta.
2. Adiciona o jogo à Biblioteca — o Hoard encontra o backup na nuvem correspondente.
3. Restaura a versão mais recente, ou uma mais antiga, e continua a jogar.

Como o Hoard localiza as pastas de save com a mesma base de dados comunitária do Ludusavi, sabe onde colocar um save restaurado mesmo numa instalação limpa — sem procurares caminhos à mão.

## Dica

As restaurações nunca são destrutivas: o save que substituis é primeiro capturado como nova versão, por isso podes sempre desfazer uma restauração restaurando a entrada anterior. Se até agora só guardavas backups locais (por exemplo com o Ludusavi), passar para o Hoard acrescenta um histórico versionado fora da máquina, a partir do qual podes restaurar mesmo depois de uma falha de disco.
`,ca=`---
title: "如何还原旧的游戏存档"
description: "走错了一步、文件损坏，或者想重新开始？用 Hoard 的云端历史回退到存档的任意先前版本——包括用 Ludusavi 等工具备份的存档。"
order: 3
updated: 2026-06-28
---

游戏中的错误决定、损坏的文件，或一个搞砸的 MOD——有时你只是需要回到从前。由于 Hoard 保留每个存档的完整版本历史，还原较早的版本只需几秒。

## 还原先前版本

1. 打开 **Hoard**，在你的**库**中找到该游戏。
2. 打开它的**历史**标签。你会看到每个备份及其日期和大小。
3. 选择你想要的版本，然后选择**还原**。
4. Hoard 会把该快照写回游戏的存档文件夹。你当前的存档会先被备份，因此还原本身也可撤销。

## 在新的或重装的 PC 上还原

1. 安装 Hoard 并用你的账号登录。
2. 把游戏添加到你的库——Hoard 会找到对应的云端备份。
3. 还原最新版本，或任意较早的版本，然后继续游戏。

由于 Hoard 使用与 Ludusavi 相同的社区数据库来定位存档文件夹，即使在全新安装上，它也知道把还原的存档放到哪里——无需你手动查找路径。

## 提示

还原绝不是破坏性的：被替换的存档会先作为新版本被捕获，因此你总能通过还原上一条记录来撤销一次还原。如果你过去只保留本地备份（例如用 Ludusavi），迁移到 Hoard 会增加一份脱离本机的版本历史，即使在磁盘故障之后，你也能从中还原。
`,pa=`---
title: "Hoard mit Docker selbst hosten (Self-Hosting)"
description: "Betreibe deinen eigenen Hoard-Server in Minuten mit Docker Compose. Open Source, kostenlos, auf deiner Hardware – eine voll selbst gehostete Cloud für deine Spielstände, ohne Konto und ohne Speicherlimit."
order: 0
featured: true
updated: 2026-06-29
---

Hoard ist Open Source und selbst hostbar. Statt Hoard Cloud zu nutzen, kannst du denselben \`hoard-server\` auf deiner eigenen Maschine betreiben und jedes Gerät darauf verweisen – ohne Konto und ohne Speicherlimit außer der Festplatte, die du ihm gibst. Diese Anleitung bringt einen Server in wenigen Minuten mit Docker zum Laufen.

## Warum Hoard selbst hosten

- **Volle Kontrolle.** Deine Spielstände liegen auf Hardware, die du kontrollierst, nicht in fremder Cloud.
- **Kein Limit.** Der Speicher wird nur von deiner eigenen Festplatte begrenzt.
- **Gleiche App, gleiche Funktionen.** Versionierter Verlauf und Hintergrund-Sync funktionieren genau wie mit Hoard Cloud – nur das Backend ändert sich.
- **Open Source.** Du kannst den Server lesen, prüfen und anpassen.

Das ist der entscheidende Unterschied zu Tools wie [Ludusavi](/guides/ludusavi-alternative): Ludusavi ist großartig für lokale Backups und eigene Cloud per Rclone, aber den Sync richtest du selbst ein. Hoard bietet dir einen verwalteten Sync-Server, den du einmal startest und mit dem sich jedes Gerät verbindet.

## Was du brauchst

- Eine Maschine, die durchläuft (Heimserver, NAS mit Docker oder ein kleiner VPS).
- Docker und Docker Compose installiert.
- Optional eine Domain und ein Reverse-Proxy für HTTPS (empfohlen für alles außerhalb deines LAN).

## Installation mit Docker Compose

Klone das Repo, erstelle eine Konfiguration aus dem Beispiel, setze deine \`public_url\` und starte den Stack:

\`\`\`sh
git clone https://github.com/rleeon/hoard.git && cd hoard
mkdir -p deploy/docker/config
cp deploy/config.toml.example deploy/docker/config/config.toml
$EDITOR deploy/docker/config/config.toml      # set public_url at minimum

cd deploy/docker
docker compose up -d --build
docker compose logs -f                         # wait for "listening"
\`\`\`

Warte, bis die Logs zeigen, dass der Server lauscht. Die Daten liegen in einem benannten Docker-Volume (\`hoard-data\`) – sichere es wie jedes andere Volume. Der Container lauscht intern auf Port \`8080\`; einen anderen Host-Port setzt du mit \`HOARD_PORT=9000 docker compose up -d\`.

## Benutzer und Geräte-Token anlegen

Der Server hat keine Registrierungsseite – Benutzer legst du auf der Kommandozeile an:

\`\`\`sh
docker compose exec server hoard-admin --config /etc/hoard/config.toml \\
    user create alice --admin --password 'CHANGE_ME'
docker compose exec server hoard-admin --config /etc/hoard/config.toml \\
    token create alice --device 'desktop'
\`\`\`

Das Token wird nur einmal angezeigt und **kann später nicht wiederhergestellt werden**, also kopiere es jetzt.

## Die Desktop-App verbinden

Installiere die [Hoard-Desktop-App](/download) auf jedem Rechner. Wähle im Onboarding **Autohost** und füge deine Server-URL und das eben erstellte Token ein. Ab da verhält es sich genau wie Hoard Cloud: Es erkennt deine Spiele, sichert Spielstände automatisch und führt einen versionierten Verlauf. Siehe [Spielstände zwischen PCs synchronisieren](/guides/sync-game-saves-across-pcs) für den Alltag.

## Im Produktivbetrieb

Für alles, was über dein lokales Netz hinausgeht, beende TLS an einem Reverse-Proxy (Caddy, nginx oder Traefik) und setze \`public_url\` auf deine echte HTTPS-Adresse. Lieber Bare Metal? Das Repo liefert auch ein \`systemd\`-Installationsskript und einen Befehl \`hoard-server upgrade\`, der die Binärdatei atomar austauscht, ohne einen laufenden Sync abzubrechen.

## Selbst hosten oder Hoard Cloud?

Selbst-Hosting ist ideal, wenn du schon einen Server betreibst und volle Kontrolle ohne Limit willst. Wenn du keine Infrastruktur pflegen möchtest, bietet dir [Hoard Cloud](/pricing) denselben Sync verwaltet, mit einem kostenlosen Einstieg. So oder so bleiben App und Spielstände portabel – du kannst später wechseln.
`,ma=`---
title: "How to self-host Hoard with Docker"
description: "Run your own Hoard server with Docker Compose in minutes. Open source, free, on your hardware — a fully self-hosted cloud for your game saves, no account or quota."
order: 0
featured: true
updated: 2026-06-29
---

Hoard is open source and self-hostable. Instead of using Hoard Cloud, you can run the same \`hoard-server\` on your own machine and point every device at it — no account, no storage quota beyond the disk you give it. This guide gets a server running with Docker in a few minutes.

## Why self-host Hoard

- **Full ownership.** Your game saves live on hardware you control, not someone else's cloud.
- **No quota.** Storage is limited only by your own disk.
- **Same app, same features.** Versioned history and background sync work exactly as they do with Hoard Cloud — only the backend changes.
- **Open source.** You can read, audit and modify the server.

This is the key difference from tools like [Ludusavi](/guides/ludusavi-alternative): Ludusavi is great for local backups and bring-your-own-cloud via Rclone, but you wire up the sync yourself. Hoard gives you a managed sync server you run once and every device connects to.

## What you need

- A machine that stays on (a home server, NAS that runs Docker, or a small VPS).
- Docker and Docker Compose installed.
- Optionally a domain name and a reverse proxy for HTTPS (recommended for anything beyond your LAN).

## Install with Docker Compose

Clone the repo, create a config from the example, set your \`public_url\`, and start the stack:

\`\`\`sh
git clone https://github.com/rleeon/hoard.git && cd hoard
mkdir -p deploy/docker/config
cp deploy/config.toml.example deploy/docker/config/config.toml
$EDITOR deploy/docker/config/config.toml      # set public_url at minimum

cd deploy/docker
docker compose up -d --build
docker compose logs -f                         # wait for "listening"
\`\`\`

Wait until the logs show that the server is listening. Data lives in a named Docker volume (\`hoard-data\`) — back it up like any other volume. The container listens on port \`8080\` internally; map a different host port with \`HOARD_PORT=9000 docker compose up -d\`.

## Create your user and a device token

The server has no signup screen — you create users from the command line:

\`\`\`sh
docker compose exec server hoard-admin --config /etc/hoard/config.toml \\
    user create alice --admin --password 'CHANGE_ME'
docker compose exec server hoard-admin --config /etc/hoard/config.toml \\
    token create alice --device 'desktop'
\`\`\`

The token is printed once and **cannot be retrieved later**, so copy it now.

## Connect the desktop app

Install the [Hoard desktop app](/download) on each machine. In the onboarding flow, pick **Autohost**, then paste your server URL and the token you just created. From there it behaves exactly like Hoard Cloud: it detects your games, backs up saves automatically, and keeps versioned history. See [syncing saves across PCs](/guides/sync-game-saves-across-pcs) for the day-to-day flow.

## Run it in production

For anything exposed beyond your local network, terminate TLS at a reverse proxy (Caddy, nginx or Traefik) and set \`public_url\` to your real HTTPS address. Prefer bare metal? The repo also ships a \`systemd\` install script and a \`hoard-server upgrade\` command that swaps the binary atomically without killing an in-flight sync.

## Self-host or Hoard Cloud?

Self-hosting is ideal if you already run a server and want full control with no quota. If you'd rather not maintain infrastructure, [Hoard Cloud](/pricing) gives you the same sync managed for you, with a free tier to start. Either way the app and your saves stay portable — you can switch later.
`,ha=`---
title: "Cómo autoalojar Hoard con Docker (self-hosted)"
description: "Monta tu propio servidor de Hoard con Docker Compose en minutos. Código abierto, gratis y en tu hardware: una nube totalmente self-hosted para tus partidas guardadas, sin cuenta ni límite de espacio."
order: 0
featured: true
updated: 2026-06-29
---

Hoard es de código abierto y se puede autoalojar. En lugar de usar Hoard Cloud, puedes ejecutar el mismo \`hoard-server\` en tu propia máquina y apuntar todos tus dispositivos a él: sin cuenta y sin más límite de espacio que el disco que le des. Esta guía deja un servidor funcionando con Docker en pocos minutos.

## Por qué autoalojar Hoard

- **Control total.** Tus partidas viven en hardware que tú controlas, no en la nube de otro.
- **Sin cuota.** El espacio solo lo limita tu propio disco.
- **La misma app, las mismas funciones.** El historial versionado y la sincronización en segundo plano funcionan igual que con Hoard Cloud; solo cambia el backend.
- **Código abierto.** Puedes leer, auditar y modificar el servidor.

Esta es la diferencia clave frente a herramientas como [Ludusavi](/guides/ludusavi-alternative): Ludusavi es excelente para copias locales y para usar tu propia nube vía Rclone, pero la sincronización la montas tú. Hoard te da un servidor de sincronización gestionado que arrancas una vez y al que se conectan todos los dispositivos.

## Qué necesitas

- Una máquina que esté siempre encendida (un servidor casero, un NAS que ejecute Docker o un VPS pequeño).
- Docker y Docker Compose instalados.
- Opcionalmente un dominio y un proxy inverso para HTTPS (recomendado para cualquier cosa fuera de tu red local).

## Instalación con Docker Compose

Clona el repositorio, crea una configuración a partir del ejemplo, define tu \`public_url\` y arranca el stack:

\`\`\`sh
git clone https://github.com/rleeon/hoard.git && cd hoard
mkdir -p deploy/docker/config
cp deploy/config.toml.example deploy/docker/config/config.toml
$EDITOR deploy/docker/config/config.toml      # set public_url at minimum

cd deploy/docker
docker compose up -d --build
docker compose logs -f                         # wait for "listening"
\`\`\`

Espera a que los logs muestren que el servidor está escuchando. Los datos se guardan en un volumen de Docker (\`hoard-data\`); haz copia de seguridad como con cualquier otro volumen. El contenedor escucha internamente en el puerto \`8080\`; usa otro puerto del host con \`HOARD_PORT=9000 docker compose up -d\`.

## Crea tu usuario y un token de dispositivo

El servidor no tiene pantalla de registro: los usuarios se crean por línea de comandos:

\`\`\`sh
docker compose exec server hoard-admin --config /etc/hoard/config.toml \\
    user create alice --admin --password 'CHANGE_ME'
docker compose exec server hoard-admin --config /etc/hoard/config.toml \\
    token create alice --device 'desktop'
\`\`\`

El token se muestra una sola vez y **no se puede recuperar después**, así que cópialo ahora.

## Conecta la aplicación de escritorio

Instala la [app de escritorio de Hoard](/download) en cada equipo. En el asistente inicial elige **Autohost**, y pega la URL de tu servidor y el token que acabas de crear. A partir de ahí se comporta igual que Hoard Cloud: detecta tus juegos, copia las partidas automáticamente y mantiene el historial versionado. Consulta [sincronizar partidas entre varios PC](/guides/sync-game-saves-across-pcs) para el día a día.

## Llevarlo a producción

Para cualquier cosa expuesta fuera de tu red local, termina el TLS en un proxy inverso (Caddy, nginx o Traefik) y pon en \`public_url\` tu dirección HTTPS real. ¿Prefieres bare metal? El repositorio también incluye un script de instalación con \`systemd\` y un comando \`hoard-server upgrade\` que cambia el binario de forma atómica sin cortar una sincronización en curso.

## ¿Self-hosted o Hoard Cloud?

Autoalojar es ideal si ya tienes un servidor y quieres control total sin límites. Si prefieres no mantener infraestructura, [Hoard Cloud](/pricing) te da la misma sincronización gestionada por nosotros, con un plan gratuito para empezar. En cualquier caso, la app y tus partidas siguen siendo portables: puedes cambiar más adelante.
`,va=`---
title: "Comment auto-héberger Hoard avec Docker (self-hosted)"
description: "Lancez votre propre serveur Hoard en quelques minutes avec Docker Compose. Open source, gratuit, sur votre matériel : un cloud entièrement auto-hébergé pour vos sauvegardes de jeux, sans compte ni quota."
order: 0
featured: true
updated: 2026-06-29
---

Hoard est open source et auto-hébergeable. Au lieu d'utiliser Hoard Cloud, vous pouvez exécuter le même \`hoard-server\` sur votre propre machine et y connecter chaque appareil — sans compte, sans quota au-delà du disque que vous lui donnez. Ce guide met un serveur en route avec Docker en quelques minutes.

## Pourquoi auto-héberger Hoard

- **Maîtrise totale.** Vos sauvegardes vivent sur du matériel que vous contrôlez, pas sur le cloud d'un autre.
- **Aucun quota.** L'espace n'est limité que par votre propre disque.
- **Même app, mêmes fonctions.** L'historique versionné et la synchro en arrière-plan fonctionnent comme avec Hoard Cloud — seul le backend change.
- **Open source.** Vous pouvez lire, auditer et modifier le serveur.

C'est la différence clé avec des outils comme [Ludusavi](/guides/ludusavi-alternative) : Ludusavi est excellent pour les sauvegardes locales et le cloud « apportez le vôtre » via Rclone, mais c'est à vous de câbler la synchro. Hoard vous donne un serveur de synchro géré que vous lancez une fois et auquel chaque appareil se connecte.

## Ce qu'il vous faut

- Une machine qui reste allumée (serveur maison, NAS exécutant Docker ou petit VPS).
- Docker et Docker Compose installés.
- Éventuellement un nom de domaine et un reverse proxy pour le HTTPS (recommandé au-delà de votre réseau local).

## Installation avec Docker Compose

Clonez le dépôt, créez une configuration depuis l'exemple, définissez votre \`public_url\` et démarrez la pile :

\`\`\`sh
git clone https://github.com/rleeon/hoard.git && cd hoard
mkdir -p deploy/docker/config
cp deploy/config.toml.example deploy/docker/config/config.toml
$EDITOR deploy/docker/config/config.toml      # set public_url at minimum

cd deploy/docker
docker compose up -d --build
docker compose logs -f                         # wait for "listening"
\`\`\`

Attendez que les logs indiquent que le serveur écoute. Les données vivent dans un volume Docker nommé (\`hoard-data\`) — sauvegardez-le comme n'importe quel volume. Le conteneur écoute en interne sur le port \`8080\` ; choisissez un autre port hôte avec \`HOARD_PORT=9000 docker compose up -d\`.

## Créez votre utilisateur et un jeton d'appareil

Le serveur n'a pas d'écran d'inscription — vous créez les utilisateurs en ligne de commande :

\`\`\`sh
docker compose exec server hoard-admin --config /etc/hoard/config.toml \\
    user create alice --admin --password 'CHANGE_ME'
docker compose exec server hoard-admin --config /etc/hoard/config.toml \\
    token create alice --device 'desktop'
\`\`\`

Le jeton n'est affiché qu'une fois et **ne peut pas être récupéré ensuite**, copiez-le maintenant.

## Connectez l'application de bureau

Installez l'[app de bureau Hoard](/download) sur chaque machine. Dans l'assistant, choisissez **Autohost**, puis collez l'URL de votre serveur et le jeton que vous venez de créer. Ensuite, le comportement est identique à Hoard Cloud : détection des jeux, sauvegarde automatique et historique versionné. Voir [synchroniser ses sauvegardes entre PC](/guides/sync-game-saves-across-pcs) pour l'usage quotidien.

## En production

Pour tout ce qui dépasse votre réseau local, terminez le TLS sur un reverse proxy (Caddy, nginx ou Traefik) et réglez \`public_url\` sur votre vraie adresse HTTPS. Plutôt bare metal ? Le dépôt fournit aussi un script d'installation \`systemd\` et une commande \`hoard-server upgrade\` qui remplace le binaire de façon atomique sans interrompre une synchro en cours.

## Auto-hébergement ou Hoard Cloud ?

L'auto-hébergement est idéal si vous avez déjà un serveur et voulez un contrôle total sans quota. Si vous préférez ne pas gérer d'infrastructure, [Hoard Cloud](/pricing) vous offre la même synchro gérée pour vous, avec une offre gratuite pour démarrer. Dans les deux cas, l'app et vos sauvegardes restent portables — vous pouvez changer plus tard.
`,ga=`---
title: "Come self-hostare Hoard con Docker"
description: "Avvia il tuo server Hoard in pochi minuti con Docker Compose. Open source, gratuito, sul tuo hardware: un cloud completamente self-hosted per i salvataggi dei giochi, senza account né limiti di spazio."
order: 0
featured: true
updated: 2026-06-29
---

Hoard è open source e self-hostabile. Invece di usare Hoard Cloud, puoi eseguire lo stesso \`hoard-server\` sulla tua macchina e puntarci ogni dispositivo — senza account e senza limiti di spazio oltre al disco che gli dai. Questa guida mette in piedi un server con Docker in pochi minuti.

## Perché self-hostare Hoard

- **Controllo totale.** I tuoi salvataggi vivono su hardware che controlli tu, non sul cloud altrui.
- **Nessun limite.** Lo spazio è limitato solo dal tuo disco.
- **Stessa app, stesse funzioni.** Cronologia versionata e sync in background funzionano come con Hoard Cloud — cambia solo il backend.
- **Open source.** Puoi leggere, verificare e modificare il server.

È la differenza chiave rispetto a strumenti come [Ludusavi](/guides/ludusavi-alternative): Ludusavi è ottimo per i backup locali e per il cloud «porta il tuo» tramite Rclone, ma la sincronizzazione la configuri tu. Hoard ti dà un server di sync gestito che avvii una volta e a cui si collega ogni dispositivo.

## Cosa ti serve

- Una macchina sempre accesa (un server domestico, un NAS che esegue Docker o un piccolo VPS).
- Docker e Docker Compose installati.
- Facoltativamente un dominio e un reverse proxy per l'HTTPS (consigliato per tutto ciò che esce dalla rete locale).

## Installazione con Docker Compose

Clona il repository, crea una configurazione dall'esempio, imposta il tuo \`public_url\` e avvia lo stack:

\`\`\`sh
git clone https://github.com/rleeon/hoard.git && cd hoard
mkdir -p deploy/docker/config
cp deploy/config.toml.example deploy/docker/config/config.toml
$EDITOR deploy/docker/config/config.toml      # set public_url at minimum

cd deploy/docker
docker compose up -d --build
docker compose logs -f                         # wait for "listening"
\`\`\`

Attendi che i log mostrino che il server è in ascolto. I dati vivono in un volume Docker (\`hoard-data\`): eseguine il backup come per qualsiasi volume. Il container ascolta internamente sulla porta \`8080\`; usa un'altra porta host con \`HOARD_PORT=9000 docker compose up -d\`.

## Crea il tuo utente e un token dispositivo

Il server non ha una schermata di registrazione: gli utenti si creano da riga di comando:

\`\`\`sh
docker compose exec server hoard-admin --config /etc/hoard/config.toml \\
    user create alice --admin --password 'CHANGE_ME'
docker compose exec server hoard-admin --config /etc/hoard/config.toml \\
    token create alice --device 'desktop'
\`\`\`

Il token viene mostrato una sola volta e **non può essere recuperato in seguito**, quindi copialo ora.

## Collega l'app desktop

Installa l'[app desktop di Hoard](/download) su ogni macchina. Nella procedura iniziale scegli **Autohost**, poi incolla l'URL del server e il token appena creato. Da lì si comporta esattamente come Hoard Cloud: rileva i giochi, salva automaticamente e mantiene la cronologia versionata. Vedi [sincronizzare i salvataggi tra più PC](/guides/sync-game-saves-across-pcs) per l'uso quotidiano.

## In produzione

Per tutto ciò che è esposto oltre la rete locale, termina il TLS su un reverse proxy (Caddy, nginx o Traefik) e imposta \`public_url\` sul tuo vero indirizzo HTTPS. Preferisci il bare metal? Il repository include anche uno script di installazione \`systemd\` e un comando \`hoard-server upgrade\` che sostituisce il binario in modo atomico senza interrompere una sync in corso.

## Self-host o Hoard Cloud?

Il self-hosting è ideale se hai già un server e vuoi controllo totale senza limiti. Se preferisci non gestire infrastruttura, [Hoard Cloud](/pricing) ti dà la stessa sincronizzazione gestita da noi, con un piano gratuito per iniziare. In ogni caso app e salvataggi restano portabili: puoi cambiare in seguito.
`,fa=`---
title: "DockerでHoardをセルフホストする方法"
description: "Docker Compose を使って数分で自分専用の Hoard サーバーを構築。オープンソースで無料、自分のハードウェア上に完全セルフホストのセーブデータ用クラウドを。アカウントも容量制限も不要。"
order: 0
featured: true
updated: 2026-06-29
---

Hoard はオープンソースでセルフホスト可能です。Hoard Cloud を使う代わりに、同じ \`hoard-server\` を自分のマシンで動かし、すべての端末をそこへ接続できます。アカウントは不要で、容量制限は与えたディスク容量だけです。このガイドでは Docker を使って数分でサーバーを立ち上げます。

## なぜ Hoard をセルフホストするのか

- **完全な所有権。** セーブデータは他人のクラウドではなく、自分が管理するハードウェアに保存されます。
- **容量制限なし。** 容量は自分のディスクだけが上限です。
- **同じアプリ、同じ機能。** バージョン履歴とバックグラウンド同期は Hoard Cloud とまったく同じように動作し、変わるのはバックエンドだけです。
- **オープンソース。** サーバーを読み、監査し、改変できます。

これが [Ludusavi](/guides/ludusavi-alternative) のようなツールとの決定的な違いです。Ludusavi はローカルバックアップや Rclone 経由の「自分のクラウドを持ち込む」方式に優れていますが、同期は自分で組む必要があります。Hoard は一度立ち上げればすべての端末が接続できる、管理された同期サーバーを提供します。

## 必要なもの

- 常時稼働するマシン（自宅サーバー、Docker が動く NAS、または小さな VPS）。
- Docker と Docker Compose がインストール済みであること。
- 任意で、HTTPS 用のドメインとリバースプロキシ（LAN を越える用途では推奨）。

## Docker Compose でインストール

リポジトリをクローンし、サンプルから設定を作成して \`public_url\` を設定し、スタックを起動します。

\`\`\`sh
git clone https://github.com/rleeon/hoard.git && cd hoard
mkdir -p deploy/docker/config
cp deploy/config.toml.example deploy/docker/config/config.toml
$EDITOR deploy/docker/config/config.toml      # set public_url at minimum

cd deploy/docker
docker compose up -d --build
docker compose logs -f                         # wait for "listening"
\`\`\`

サーバーが待ち受け状態になったとログに表示されるまで待ちます。データは名前付き Docker ボリューム（\`hoard-data\`）に保存されるので、他のボリュームと同様にバックアップしてください。コンテナは内部でポート \`8080\` を待ち受けます。別のホストポートを使うには \`HOARD_PORT=9000 docker compose up -d\` とします。

## ユーザーと端末トークンを作成

サーバーにサインアップ画面はありません。ユーザーはコマンドラインで作成します。

\`\`\`sh
docker compose exec server hoard-admin --config /etc/hoard/config.toml \\
    user create alice --admin --password 'CHANGE_ME'
docker compose exec server hoard-admin --config /etc/hoard/config.toml \\
    token create alice --device 'desktop'
\`\`\`

トークンは一度だけ表示され、**後から取得することはできません**。今すぐコピーしてください。

## デスクトップアプリを接続

各マシンに [Hoard デスクトップアプリ](/download) をインストールします。オンボーディングで **Autohost** を選び、サーバーの URL と作成したトークンを貼り付けます。あとは Hoard Cloud とまったく同じで、ゲームを検出し、自動でバックアップし、バージョン履歴を保持します。日常的な使い方は [複数の PC 間でセーブを同期する](/guides/sync-game-saves-across-pcs) を参照してください。

## 本番運用

ローカルネットワークを越えて公開する場合は、リバースプロキシ（Caddy、nginx、Traefik）で TLS を終端し、\`public_url\` を実際の HTTPS アドレスに設定します。ベアメタルがよい場合は、リポジトリに \`systemd\` インストールスクリプトと、進行中の同期を止めずにバイナリをアトミックに入れ替える \`hoard-server upgrade\` コマンドも含まれています。

## セルフホストと Hoard Cloud のどちら？

すでにサーバーを運用していて容量制限なしの完全な管理を望むなら、セルフホストが最適です。インフラの保守をしたくない場合は、[Hoard Cloud](/pricing) が同じ同期をこちらで管理して提供し、無料プランから始められます。どちらでもアプリとセーブデータは可搬性を保つので、後から切り替えられます。
`,ba=`---
title: "Como auto-hospedar o Hoard com Docker (self-hosted)"
description: "Coloque seu próprio servidor Hoard no ar em minutos com o Docker Compose. Código aberto, gratuito e no seu hardware: uma nuvem totalmente self-hosted para seus saves de jogos, sem conta nem limite de espaço."
order: 0
featured: true
updated: 2026-06-29
---

O Hoard é de código aberto e pode ser auto-hospedado. Em vez de usar o Hoard Cloud, você pode rodar o mesmo \`hoard-server\` na sua própria máquina e apontar todos os dispositivos para ele — sem conta e sem limite de espaço além do disco que você der a ele. Este guia coloca um servidor no ar com Docker em poucos minutos.

## Por que auto-hospedar o Hoard

- **Controle total.** Seus saves ficam em hardware que você controla, não na nuvem de outra pessoa.
- **Sem cota.** O espaço é limitado apenas pelo seu próprio disco.
- **Mesmo app, mesmos recursos.** Histórico versionado e sincronização em segundo plano funcionam igual ao Hoard Cloud — só muda o backend.
- **Código aberto.** Você pode ler, auditar e modificar o servidor.

Essa é a diferença principal em relação a ferramentas como o [Ludusavi](/guides/ludusavi-alternative): o Ludusavi é ótimo para backups locais e para usar sua própria nuvem via Rclone, mas a sincronização você mesmo monta. O Hoard oferece um servidor de sincronização gerenciado que você sobe uma vez e ao qual cada dispositivo se conecta.

## O que você precisa

- Uma máquina que fique ligada (um servidor doméstico, um NAS que rode Docker ou um VPS pequeno).
- Docker e Docker Compose instalados.
- Opcionalmente um domínio e um proxy reverso para HTTPS (recomendado para qualquer coisa fora da sua rede local).

## Instalação com Docker Compose

Clone o repositório, crie uma configuração a partir do exemplo, defina seu \`public_url\` e suba o stack:

\`\`\`sh
git clone https://github.com/rleeon/hoard.git && cd hoard
mkdir -p deploy/docker/config
cp deploy/config.toml.example deploy/docker/config/config.toml
$EDITOR deploy/docker/config/config.toml      # set public_url at minimum

cd deploy/docker
docker compose up -d --build
docker compose logs -f                         # wait for "listening"
\`\`\`

Aguarde até os logs mostrarem que o servidor está escutando. Os dados ficam em um volume nomeado do Docker (\`hoard-data\`) — faça backup como em qualquer outro volume. O contêiner escuta internamente na porta \`8080\`; use outra porta do host com \`HOARD_PORT=9000 docker compose up -d\`.

## Crie seu usuário e um token de dispositivo

O servidor não tem tela de cadastro — os usuários são criados pela linha de comando:

\`\`\`sh
docker compose exec server hoard-admin --config /etc/hoard/config.toml \\
    user create alice --admin --password 'CHANGE_ME'
docker compose exec server hoard-admin --config /etc/hoard/config.toml \\
    token create alice --device 'desktop'
\`\`\`

O token é exibido uma única vez e **não pode ser recuperado depois**, então copie-o agora.

## Conecte o app de desktop

Instale o [app de desktop do Hoard](/download) em cada máquina. No fluxo inicial, escolha **Autohost** e cole a URL do seu servidor e o token recém-criado. A partir daí ele se comporta exatamente como o Hoard Cloud: detecta seus jogos, faz backup dos saves automaticamente e mantém o histórico versionado. Veja [sincronizar saves entre vários PCs](/guides/sync-game-saves-across-pcs) para o uso no dia a dia.

## Em produção

Para qualquer coisa exposta além da rede local, termine o TLS em um proxy reverso (Caddy, nginx ou Traefik) e defina \`public_url\` com seu endereço HTTPS real. Prefere bare metal? O repositório também traz um script de instalação \`systemd\` e um comando \`hoard-server upgrade\` que troca o binário de forma atômica sem matar uma sincronização em andamento.

## Self-hosted ou Hoard Cloud?

Auto-hospedar é ideal se você já tem um servidor e quer controle total sem cota. Se preferir não manter infraestrutura, o [Hoard Cloud](/pricing) oferece a mesma sincronização gerenciada por nós, com um plano gratuito para começar. De qualquer forma, o app e seus saves continuam portáteis — você pode trocar depois.
`,ka=`---
title: "如何用 Docker 自托管 Hoard"
description: "用 Docker Compose 几分钟搭建你自己的 Hoard 服务器。开源、免费、运行在你自己的硬件上——一个完全自托管的游戏存档云，无需账号、没有容量限制。"
order: 0
featured: true
updated: 2026-06-29
---

Hoard 是开源且可自托管的。你可以不使用 Hoard Cloud，而是在自己的机器上运行同一个 \`hoard-server\`，让每台设备都连接到它——无需账号，容量只受你分配的磁盘大小限制。本指南用 Docker 在几分钟内把服务器跑起来。

## 为什么自托管 Hoard

- **完全掌控。** 你的存档保存在你自己掌控的硬件上，而不是别人的云端。
- **没有容量限制。** 空间仅受你自己的磁盘限制。
- **同一个应用，同样的功能。** 版本历史和后台同步与 Hoard Cloud 完全一致，改变的只有后端。
- **开源。** 你可以阅读、审计并修改服务器代码。

这正是它与 [Ludusavi](/guides/ludusavi-alternative) 这类工具的关键区别：Ludusavi 在本地备份和通过 Rclone「自带云」方面很出色，但同步需要你自己搭建。Hoard 则提供一个托管式的同步服务器，启动一次后每台设备都能连接。

## 你需要准备

- 一台保持开机的机器（家庭服务器、运行 Docker 的 NAS，或一台小型 VPS）。
- 已安装 Docker 和 Docker Compose。
- 可选：一个域名和用于 HTTPS 的反向代理（超出本地局域网的场景推荐）。

## 用 Docker Compose 安装

克隆仓库，从示例创建配置，设置 \`public_url\`，然后启动整套服务：

\`\`\`sh
git clone https://github.com/rleeon/hoard.git && cd hoard
mkdir -p deploy/docker/config
cp deploy/config.toml.example deploy/docker/config/config.toml
$EDITOR deploy/docker/config/config.toml      # set public_url at minimum

cd deploy/docker
docker compose up -d --build
docker compose logs -f                         # wait for "listening"
\`\`\`

等待日志显示服务器正在监听。数据保存在一个命名的 Docker 卷（\`hoard-data\`）中——像备份其他卷一样备份它。容器内部监听 \`8080\` 端口；用 \`HOARD_PORT=9000 docker compose up -d\` 可映射到其他主机端口。

## 创建用户和设备令牌

服务器没有注册页面——用户通过命令行创建：

\`\`\`sh
docker compose exec server hoard-admin --config /etc/hoard/config.toml \\
    user create alice --admin --password 'CHANGE_ME'
docker compose exec server hoard-admin --config /etc/hoard/config.toml \\
    token create alice --device 'desktop'
\`\`\`

令牌只显示一次，**之后无法找回**，请立即复制。

## 连接桌面应用

在每台机器上安装 [Hoard 桌面应用](/download)。在初始引导中选择 **Autohost**，然后粘贴你的服务器 URL 和刚创建的令牌。之后它的行为与 Hoard Cloud 完全相同：检测你的游戏、自动备份存档、保留版本历史。日常用法请参见[在多台 PC 之间同步存档](/guides/sync-game-saves-across-pcs)。

## 在生产环境中运行

对于任何暴露到本地网络之外的部署，请在反向代理（Caddy、nginx 或 Traefik）上终止 TLS，并把 \`public_url\` 设为你真实的 HTTPS 地址。更喜欢裸机部署？仓库还提供了 \`systemd\` 安装脚本，以及一个 \`hoard-server upgrade\` 命令，它会原子地替换二进制文件而不会中断正在进行的同步。

## 自托管还是 Hoard Cloud？

如果你已经在运行服务器并希望完全掌控、没有容量限制，自托管是理想选择。如果你不想维护基础设施，[Hoard Cloud](/pricing) 提供由我们托管的同样同步功能，并有免费档可供起步。无论哪种方式，应用和你的存档都保持可迁移——以后可以随时切换。
`,Sa=`---
title: "So synchronisierst du Spielstände über mehrere PCs"
description: "Spiele dasselbe Spiel auf Desktop und Laptop, ohne Fortschritt zu verlieren. Synchronisiere deine Spielstände automatisch über mehrere PCs mit Hoard — verwaltete Cloud-Synchronisierung, ohne Ludusavi und Rclone von Hand einzurichten."
order: 2
updated: 2026-06-28
---

Wenn du an mehr als einem Computer spielst — ein Desktop zu Hause und ein Laptop unterwegs — hält Hoard deine Stände synchron, damit du immer dort weitermachst, wo du aufgehört hast.

## So funktioniert die Synchronisierung

Hoard sichert jeden Stand in deine Cloud und lädt die neueste Version auf deinen anderen Geräten herunter. Wenn du auf einem PC fertig bist, wartet der neueste Stand auf dem nächsten.

## Synchronisierung einrichten

1. Installiere **Hoard** auf jedem PC, auf dem du spielst (Windows, macOS oder Linux).
2. Melde dich mit **demselben Konto** auf jedem Gerät an oder verbinde sie mit demselben selbst gehosteten Server.
3. Füge auf jedem PC dieselben Spiele zur **Bibliothek** hinzu. Hoard ordnet sie nach Spiel zu, sodass ein auf einem Gerät gesicherter Stand auf den anderen erscheint.
4. Lass den **Automatikmodus** an. Hoard lädt nach dem Spielen hoch und vor dem Start die neueste Version herunter.

## Wechsel von Ludusavi?

Ludusavi ist ein großartiges Open-Source-Tool, um Stände lokal zu sichern und wiederherzustellen, und es kann diese Backups in eine selbst konfigurierte Cloud mit Rclone übertragen. Aber die Synchronisierung über Geräte hinweg richtest du manuell ein: Backup planen, Remote einrichten, dann auf dem anderen PC wiederherstellen, bevor du spielst.

Hoard macht daraus verwaltete Synchronisierung. Es nutzt dieselben Community-Daten für Speicherorte wie Ludusavi, um deine Stände zu finden, lädt dann nach jeder Sitzung hoch und vor der nächsten die neueste Version herunter — auf jedem PC deines Kontos, mit versionierter Historie in der Cloud. Keine Rclone-Remotes, keine Skripte. Und wie Ludusavi ist Hoard Open Source und selbst hostbar. Siehe den vollständigen [Ludusavi-Alternative-Vergleich](/guides/ludusavi-alternative).

## Konflikte vermeiden

Hoard ist konfliktbewusst: Es vergleicht Änderungszeiten und behält eine lokale Kopie jedes ersetzten Stands, sodass eine Synchronisierung nie stillschweigend Fortschritt zerstört. Läuft ein Spiel noch oder wurde ein Stand in den letzten Minuten berührt, wartet Hoard.

## Tipp

Gib jedem Gerät einen Moment, um die Synchronisierung abzuschließen, bevor du ein Spiel startest — das Dashboard zeigt den Live-Status, damit du weißt, dass der neueste Stand bereit ist.
`,ya=`---
title: "How to sync game saves across multiple PCs"
description: "Play the same game on your desktop and laptop without losing progress. Sync your game saves across PCs automatically with Hoard — managed cloud sync without wiring up Ludusavi and Rclone by hand."
order: 2
updated: 2026-06-28
---

If you play on more than one computer — a desktop at home and a laptop on the go — Hoard keeps your saves in sync so you always pick up where you left off.

## How sync works

Hoard backs up each save to your cloud and pulls the latest version down on your other machines. When you finish playing on one PC, the newest save is waiting on the next one.

## Set up sync

1. Install **Hoard** on every PC you play on (Windows, macOS or Linux).
2. Sign in with the **same account** on each machine, or connect them to the same self-hosted server.
3. Add the same games to your **Library** on each PC. Hoard matches them by game, so a save backed up on one shows up on the others.
4. Keep **automatic mode** on. Hoard uploads after you play and downloads the latest before you start.

## Coming from Ludusavi?

Ludusavi is a great open-source tool for backing up and restoring saves locally, and it can push those backups to a cloud you configure yourself with Rclone. But syncing across devices is something you wire up manually: schedule the backup, set up the remote, then restore on the other PC before you play.

Hoard turns that into managed sync. It uses the same community save-location data as Ludusavi to find your saves, then uploads after each session and downloads the latest before the next one — across every PC on your account, with versioned history in the cloud. No Rclone remotes, no scripts. And like Ludusavi, Hoard is open source and can be self-hosted. See the full [Ludusavi alternative comparison](/guides/ludusavi-alternative).

## Avoiding conflicts

Hoard is conflict-aware: it compares modification times and keeps a local copy of any replaced save, so a sync never silently destroys progress. If a game is still running or a save was touched in the last few minutes, Hoard waits.

## Tip

Give each machine a moment to finish syncing before you launch a game — the dashboard shows live status, so you know the latest save is in place.
`,za=`---
title: "Cómo sincronizar partidas guardadas entre varios PC"
description: "Juega al mismo juego en tu sobremesa y tu portátil sin perder progreso. Sincroniza tus partidas entre PC automáticamente con Hoard: sincronización en la nube gestionada, sin montar Ludusavi y Rclone a mano."
order: 2
updated: 2026-06-28
---

Si juegas en más de un ordenador —un sobremesa en casa y un portátil de viaje— Hoard mantiene tus partidas sincronizadas para que siempre retomes donde lo dejaste.

## Cómo funciona la sincronización

Hoard sube cada partida a tu nube y descarga la última versión en tus otros equipos. Cuando terminas de jugar en un PC, la partida más reciente te espera en el siguiente.

## Configura la sincronización

1. Instala **Hoard** en cada PC en el que juegues (Windows, macOS o Linux).
2. Inicia sesión con la **misma cuenta** en cada equipo, o conéctalos al mismo servidor autoalojado.
3. Añade los mismos juegos a tu **Biblioteca** en cada PC. Hoard los empareja por juego, así que una partida guardada en uno aparece en los demás.
4. Mantén el **modo automático** activado. Hoard sube cuando terminas de jugar y descarga la última versión antes de empezar.

## ¿Vienes de Ludusavi?

Ludusavi es una gran herramienta open source para hacer copias y restaurar partidas en local, y puede subir esas copias a una nube que configures tú mismo con Rclone. Pero sincronizar entre dispositivos es algo que montas a mano: programas la copia, configuras el remoto y luego restauras en el otro PC antes de jugar.

Hoard convierte eso en sincronización gestionada. Usa los mismos datos comunitarios de ubicación de partidas que Ludusavi para encontrar tus saves, y luego sube tras cada sesión y descarga la última versión antes de la siguiente, en todos los PC de tu cuenta y con historial versionado en la nube. Sin remotos de Rclone, sin scripts. Y, como Ludusavi, Hoard es open source y se puede autoalojar. Mira la [comparativa completa con Ludusavi](/guides/ludusavi-alternative).

## Evitar conflictos

Hoard tiene en cuenta los conflictos: compara las fechas de modificación y guarda una copia local de cualquier partida que reemplaza, así que una sincronización nunca destruye progreso en silencio. Si un juego sigue abierto o la partida se tocó hace pocos minutos, Hoard espera.

## Consejo

Deja que cada equipo termine de sincronizar antes de abrir un juego: el panel muestra el estado en vivo, así sabes que la última partida ya está en su sitio.
`,Ha=`---
title: "Comment synchroniser vos parties entre plusieurs PC"
description: "Jouez au même jeu sur votre fixe et votre portable sans perdre votre progression. Synchronisez vos parties entre PC automatiquement avec Hoard — une synchro cloud gérée, sans configurer Ludusavi et Rclone à la main."
order: 2
updated: 2026-06-28
---

Si vous jouez sur plus d'un ordinateur — un fixe à la maison et un portable en déplacement — Hoard garde vos sauvegardes synchronisées pour que vous repreniez toujours là où vous en étiez.

## Comment fonctionne la synchronisation

Hoard sauvegarde chaque partie vers votre cloud et récupère la dernière version sur vos autres machines. Quand vous finissez de jouer sur un PC, la sauvegarde la plus récente vous attend sur le suivant.

## Configurer la synchronisation

1. Installez **Hoard** sur chaque PC où vous jouez (Windows, macOS ou Linux).
2. Connectez-vous avec le **même compte** sur chaque machine, ou reliez-les au même serveur auto-hébergé.
3. Ajoutez les mêmes jeux à votre **Bibliothèque** sur chaque PC. Hoard les associe par jeu, donc une sauvegarde faite sur l'un apparaît sur les autres.
4. Gardez le **mode automatique** activé. Hoard envoie après que vous jouez et télécharge la dernière version avant que vous commenciez.

## Vous venez de Ludusavi ?

Ludusavi est un excellent outil open source pour sauvegarder et restaurer des parties en local, et il peut envoyer ces sauvegardes vers un cloud que vous configurez vous-même avec Rclone. Mais la synchro entre appareils, vous la montez à la main : planifier la sauvegarde, configurer le distant, puis restaurer sur l'autre PC avant de jouer.

Hoard transforme cela en synchro gérée. Il utilise les mêmes données communautaires d'emplacements que Ludusavi pour trouver vos sauvegardes, puis envoie après chaque session et télécharge la dernière version avant la suivante — sur chaque PC de votre compte, avec un historique versionné dans le cloud. Pas de distants Rclone, pas de scripts. Et comme Ludusavi, Hoard est open source et peut être auto-hébergé. Voir la [comparaison complète avec Ludusavi](/guides/ludusavi-alternative).

## Éviter les conflits

Hoard gère les conflits : il compare les dates de modification et conserve une copie locale de toute sauvegarde remplacée, donc une synchro ne détruit jamais la progression en silence. Si un jeu tourne encore ou qu'une sauvegarde a été modifiée il y a quelques minutes, Hoard attend.

## Astuce

Laissez chaque machine finir de synchroniser avant de lancer un jeu — le tableau de bord affiche l'état en direct, vous savez donc que la dernière sauvegarde est en place.
`,wa=`---
title: "Come sincronizzare i salvataggi tra più PC"
description: "Gioca allo stesso gioco su fisso e portatile senza perdere progressi. Sincronizza i tuoi salvataggi tra PC automaticamente con Hoard — sincronizzazione cloud gestita, senza configurare Ludusavi e Rclone a mano."
order: 2
updated: 2026-06-28
---

Se giochi su più di un computer — un fisso a casa e un portatile in giro — Hoard mantiene i salvataggi sincronizzati così riprendi sempre da dove avevi lasciato.

## Come funziona la sincronizzazione

Hoard fa il backup di ogni salvataggio sul tuo cloud e scarica l'ultima versione sulle altre macchine. Quando finisci di giocare su un PC, il salvataggio più recente ti aspetta sul successivo.

## Imposta la sincronizzazione

1. Installa **Hoard** su ogni PC su cui giochi (Windows, macOS o Linux).
2. Accedi con lo **stesso account** su ogni macchina, o collegale allo stesso server self-hosted.
3. Aggiungi gli stessi giochi alla **Libreria** su ogni PC. Hoard li abbina per gioco, così un salvataggio fatto su uno appare sugli altri.
4. Tieni attiva la **modalità automatica**. Hoard carica dopo che giochi e scarica l'ultima versione prima che inizi.

## Arrivi da Ludusavi?

Ludusavi è un ottimo strumento open source per fare backup e ripristinare salvataggi in locale, e può inviare quei backup a un cloud che configuri tu stesso con Rclone. Ma la sincronizzazione tra dispositivi la imposti a mano: programmare il backup, configurare il remoto, poi ripristinare sull'altro PC prima di giocare.

Hoard trasforma tutto questo in sincronizzazione gestita. Usa gli stessi dati comunitari di posizione di Ludusavi per trovare i tuoi salvataggi, poi carica dopo ogni sessione e scarica l'ultima versione prima della successiva — su ogni PC del tuo account, con cronologia versionata nel cloud. Niente remoti Rclone, niente script. E come Ludusavi, Hoard è open source e può essere self-hosted. Vedi il [confronto completo con Ludusavi](/guides/ludusavi-alternative).

## Evitare i conflitti

Hoard è consapevole dei conflitti: confronta le date di modifica e conserva una copia locale di ogni salvataggio sostituito, così una sincronizzazione non distrugge mai i progressi in silenzio. Se un gioco è ancora aperto o un salvataggio è stato toccato negli ultimi minuti, Hoard aspetta.

## Suggerimento

Lascia che ogni macchina finisca di sincronizzare prima di avviare un gioco — la dashboard mostra lo stato in tempo reale, così sai che l'ultimo salvataggio è al suo posto.
`,Ca=`---
title: "複数の PC 間でセーブデータを同期する方法"
description: "デスクトップとノート PC で同じゲームを進行を失わずにプレイ。Hoard でセーブデータを PC 間で自動同期。Ludusavi と Rclone を手動で設定することなく、マネージドなクラウド同期を実現します。"
order: 2
updated: 2026-06-28
---

複数のコンピューター（自宅のデスクトップと外出先のノート PC など）でプレイするなら、Hoard がセーブデータを同期し続けるので、いつでも続きから再開できます。

## 同期の仕組み

Hoard は各セーブをクラウドにバックアップし、ほかのマシンに最新バージョンをダウンロードします。ある PC でプレイを終えると、最新のセーブが次の PC で待っています。

## 同期を設定する

1. プレイするすべての PC に **Hoard をインストール** します（Windows、macOS、Linux）。
2. 各マシンで **同じアカウント** でサインインするか、同じセルフホストサーバーに接続します。
3. 各 PC の **ライブラリ** に同じゲームを追加します。Hoard はゲーム単位で対応付けるので、一方でバックアップしたセーブが他方にも表示されます。
4. **自動モード** をオンのままにします。Hoard はプレイ後にアップロードし、開始前に最新版をダウンロードします。

## Ludusavi から移行しますか？

Ludusavi はローカルでセーブをバックアップ・復元する優れたオープンソースツールで、Rclone で自分で設定したクラウドへバックアップを送ることもできます。ただし端末間の同期は自分で組む必要があります。バックアップをスケジュールし、リモートを設定し、プレイ前にもう一方の PC で復元する、という流れです。

Hoard はこれをマネージドな同期に変えます。Ludusavi と同じコミュニティのセーブ位置データを使ってセーブを見つけ、各セッション後にアップロードし、次の前に最新版をダウンロードします。アカウント内のすべての PC で、クラウド上に世代履歴を保ちながら行われます。Rclone のリモートもスクリプトも不要です。そして Ludusavi と同様に、Hoard もオープンソースでセルフホスト可能です。詳しくは [Ludusavi 代替の比較](/guides/ludusavi-alternative) をご覧ください。

## 競合を避ける

Hoard は競合を認識します。更新時刻を比較し、置き換えるセーブのローカルコピーを保持するため、同期が黙って進行を壊すことはありません。ゲームがまだ起動中だったり、直近数分でセーブが変更されていたりする場合、Hoard は待機します。

## ヒント

ゲームを起動する前に、各マシンの同期が完了するまで少し待ちましょう。ダッシュボードがリアルタイムの状態を表示するので、最新のセーブが揃っているか分かります。
`,qa=`---
title: "Como sincronizar saves entre vários PCs"
description: "Joga o mesmo jogo no fixo e no portátil sem perder progresso. Sincroniza os teus saves entre PCs automaticamente com o Hoard — sincronização na nuvem gerida, sem configurar o Ludusavi e o Rclone à mão."
order: 2
updated: 2026-06-28
---

Se jogas em mais de um computador — um fixo em casa e um portátil em viagem — o Hoard mantém os teus saves sincronizados para que retomes sempre onde paraste.

## Como funciona a sincronização

O Hoard faz backup de cada save para a tua nuvem e descarrega a versão mais recente nas tuas outras máquinas. Quando acabas de jogar num PC, o save mais recente espera-te no seguinte.

## Configurar a sincronização

1. Instala o **Hoard** em cada PC onde jogas (Windows, macOS ou Linux).
2. Inicia sessão com a **mesma conta** em cada máquina, ou liga-as ao mesmo servidor self-hosted.
3. Adiciona os mesmos jogos à **Biblioteca** em cada PC. O Hoard associa-os por jogo, por isso um save feito num aparece nos outros.
4. Mantém o **modo automático** ligado. O Hoard envia depois de jogares e descarrega a versão mais recente antes de começares.

## Vens do Ludusavi?

O Ludusavi é uma excelente ferramenta open source para fazer backup e restaurar saves localmente, e pode enviar esses backups para uma nuvem que configuras tu mesmo com o Rclone. Mas a sincronização entre dispositivos montas tu à mão: agendar o backup, configurar o remoto, e depois restaurar no outro PC antes de jogar.

O Hoard transforma isso em sincronização gerida. Usa os mesmos dados comunitários de localização do Ludusavi para encontrar os teus saves, depois envia após cada sessão e descarrega a versão mais recente antes da seguinte — em cada PC da tua conta, com histórico versionado na nuvem. Sem remotos de Rclone, sem scripts. E como o Ludusavi, o Hoard é open source e pode ser self-hosted. Vê a [comparação completa com o Ludusavi](/guides/ludusavi-alternative).

## Evitar conflitos

O Hoard tem em conta os conflitos: compara as datas de modificação e guarda uma cópia local de qualquer save substituído, por isso uma sincronização nunca destrói progresso em silêncio. Se um jogo ainda estiver aberto ou um save foi tocado nos últimos minutos, o Hoard espera.

## Dica

Dá a cada máquina um momento para terminar a sincronização antes de abrires um jogo — o painel mostra o estado em tempo real, por isso sabes que o save mais recente já está no sítio.
`,La=`---
title: "如何在多台 PC 之间同步游戏存档"
description: "在台式机和笔记本上玩同一款游戏而不丢失进度。用 Hoard 在多台 PC 之间自动同步存档——托管式云同步，无需手动配置 Ludusavi 和 Rclone。"
order: 2
updated: 2026-06-28
---

如果你在不止一台电脑上玩游戏——家里的台式机和外出用的笔记本——Hoard 会让你的存档保持同步，让你总能从上次离开的地方继续。

## 同步的原理

Hoard 会把每个存档备份到你的云端，并在你的其他机器上拉取最新版本。当你在一台 PC 上玩完，最新的存档就已在下一台等着你。

## 设置同步

1. 在你玩游戏的每台 PC 上**安装 Hoard**（Windows、macOS 或 Linux）。
2. 在每台机器上用**同一账号**登录，或把它们连接到同一台自托管服务器。
3. 在每台 PC 的**库**中添加相同的游戏。Hoard 按游戏进行匹配，因此在一台上备份的存档会出现在其他机器上。
4. 保持**自动模式**开启。Hoard 会在你玩完后上传，并在你开始前下载最新版本。

## 从 Ludusavi 迁移？

Ludusavi 是一款出色的开源工具，可在本地备份和还原存档，并能通过你自己用 Rclone 配置的云端推送这些备份。但跨设备同步需要你自己搭建：安排备份、配置远端，然后在玩之前在另一台 PC 上还原。

Hoard 把这一切变成托管式同步。它使用与 Ludusavi 相同的社区存档位置数据来找到你的存档，然后在每次会话后上传、在下一次之前下载最新版本——覆盖你账号下的每台 PC，并在云端保留版本历史。无需 Rclone 远端，无需脚本。而且与 Ludusavi 一样，Hoard 同样开源且可自托管。请见完整的 [Ludusavi 替代方案对比](/guides/ludusavi-alternative)。

## 避免冲突

Hoard 具备冲突感知：它会比较修改时间，并为任何被替换的存档保留一份本地副本，因此同步绝不会悄无声息地破坏进度。如果某款游戏仍在运行，或某个存档在最近几分钟内被改动过，Hoard 会等待。

## 提示

在启动游戏前，给每台机器一点时间完成同步——仪表盘会显示实时状态，让你知道最新存档已经就位。
`;function K(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var x=K();function ce(n){x=n}var q={exec:()=>null};function P(n){let e=[];return a=>{let s=Math.max(0,Math.min(3,a-1)),o=e[s];return o||(o=n(s),e[s]=o),o}}function h(n,e=""){let a=typeof n=="string"?n:n.source,s={replace:(o,t)=>{let r=typeof t=="string"?t:t.source;return r=r.replace(k.caret,"$1"),a=a.replace(o,r),s},getRegex:()=>new RegExp(a,e)};return s}var xa=((n="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+n)}catch{return!1}})(),k={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:P(n=>new RegExp(`^ {0,${n}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:P(n=>new RegExp(`^ {0,${n}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:P(n=>new RegExp(`^ {0,${n}}(?:\`\`\`|~~~)`)),headingBeginRegex:P(n=>new RegExp(`^ {0,${n}}#`)),htmlBeginRegex:P(n=>new RegExp(`^ {0,${n}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:P(n=>new RegExp(`^ {0,${n}}>`))},Pa=/^(?:[ \t]*(?:\n|$))+/,Da=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Oa=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,j=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ra=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Z=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,pe=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,me=h(pe).replace(/bull/g,Z).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Aa=h(pe).replace(/bull/g,Z).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Q=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,_a=/^[^\n]+/,J=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ja=h(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",J).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ga=h(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Z).getRegex(),M="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Y=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ta=h("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Y).replace("tag",M).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),he=h(Q).replace("hr",j).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M).getRegex(),Ia=h(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",he).getRegex(),ee={blockquote:Ia,code:Da,def:ja,fences:Oa,heading:Ra,hr:j,html:Ta,lheading:me,list:Ga,newline:Pa,paragraph:he,table:q,text:_a},se=h("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",j).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M).getRegex(),Wa={...ee,lheading:Aa,table:se,paragraph:h(Q).replace("hr",j).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",se).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M).getRegex()},Ea={...ee,html:h(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Y).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:q,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:h(Q).replace("hr",j).replace("heading",` *#{1,6} *[^
]`).replace("lheading",me).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ba=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ma=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ve=/^( {2,}|\\)\n(?!\s*$)/,$a=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,O=/[\p{P}\p{S}]/u,$=/[\s\p{P}\p{S}]/u,ae=/[^\s\p{P}\p{S}]/u,Va=h(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,$).getRegex(),ge=/(?!~)[\p{P}\p{S}]/u,Na=/(?!~)[\s\p{P}\p{S}]/u,Ua=/(?:[^\s\p{P}\p{S}]|~)/u,Fa=h(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",xa?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),fe=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Xa=h(fe,"u").replace(/punct/g,O).getRegex(),Ka=h(fe,"u").replace(/punct/g,ge).getRegex(),be="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Za=h(be,"gu").replace(/notPunctSpace/g,ae).replace(/punctSpace/g,$).replace(/punct/g,O).getRegex(),Qa=h(be,"gu").replace(/notPunctSpace/g,Ua).replace(/punctSpace/g,Na).replace(/punct/g,ge).getRegex(),Ja=h("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ae).replace(/punctSpace/g,$).replace(/punct/g,O).getRegex(),Ya=h(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,O).getRegex(),en="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",an=h(en,"gu").replace(/notPunctSpace/g,ae).replace(/punctSpace/g,$).replace(/punct/g,O).getRegex(),nn=h(/\\(punct)/,"gu").replace(/punct/g,O).getRegex(),on=h(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),sn=h(Y).replace("(?:-->|$)","-->").getRegex(),tn=h("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",sn).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),W=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,rn=h(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",W).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ke=h(/^!?\[(label)\]\[(ref)\]/).replace("label",W).replace("ref",J).getRegex(),Se=h(/^!?\[(ref)\](?:\[\])?/).replace("ref",J).getRegex(),un=h("reflink|nolink(?!\\()","g").replace("reflink",ke).replace("nolink",Se).getRegex(),ie=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ne={_backpedal:q,anyPunctuation:nn,autolink:on,blockSkip:Fa,br:ve,code:Ma,del:q,delLDelim:q,delRDelim:q,emStrongLDelim:Xa,emStrongRDelimAst:Za,emStrongRDelimUnd:Ja,escape:Ba,link:rn,nolink:Se,punctuation:Va,reflink:ke,reflinkSearch:un,tag:tn,text:$a,url:q},dn={...ne,link:h(/^!?\[(label)\]\((.*?)\)/).replace("label",W).getRegex(),reflink:h(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",W).getRegex()},U={...ne,emStrongRDelimAst:Qa,emStrongLDelim:Ka,delLDelim:Ya,delRDelim:an,url:h(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",ie).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:h(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",ie).getRegex()},ln={...U,br:h(ve).replace("{2,}","*").getRegex(),text:h(U.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},T={normal:ee,gfm:Wa,pedantic:Ea},A={normal:ne,gfm:U,breaks:ln,pedantic:dn},cn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},te=n=>cn[n];function H(n,e){if(e){if(k.escapeTest.test(n))return n.replace(k.escapeReplace,te)}else if(k.escapeTestNoEncode.test(n))return n.replace(k.escapeReplaceNoEncode,te);return n}function re(n){try{n=encodeURI(n).replace(k.percentDecode,"%")}catch{return null}return n}function ue(n,e){var t;let a=n.replace(k.findPipe,(r,u,i)=>{let l=!1,d=u;for(;--d>=0&&i[d]==="\\";)l=!l;return l?"|":" |"}),s=a.split(k.splitPipe),o=0;if(s[0].trim()||s.shift(),s.length>0&&!((t=s.at(-1))!=null&&t.trim())&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;o<s.length;o++)s[o]=s[o].trim().replace(k.slashPipe,"|");return s}function w(n,e,a){let s=n.length;if(s===0)return"";let o=0;for(;o<s&&n.charAt(s-o-1)===e;)o++;return n.slice(0,s-o)}function de(n){let e=n.split(`
`),a=e.length-1;for(;a>=0&&k.blankLine.test(e[a]);)a--;return e.length-a<=2?n:e.slice(0,a+1).join(`
`)}function pn(n,e){if(n.indexOf(e[1])===-1)return-1;let a=0;for(let s=0;s<n.length;s++)if(n[s]==="\\")s++;else if(n[s]===e[0])a++;else if(n[s]===e[1]&&(a--,a<0))return s;return a>0?-2:-1}function mn(n,e=0){let a=e,s="";for(let o of n)if(o==="	"){let t=4-a%4;s+=" ".repeat(t),a+=t}else s+=o,a++;return s}function le(n,e,a,s,o){let t=e.href,r=e.title||null,u=n[1].replace(o.other.outputLinkReplace,"$1");s.state.inLink=!0;let i={type:n[0].charAt(0)==="!"?"image":"link",raw:a,href:t,title:r,text:u,tokens:s.inlineTokens(u)};return s.state.inLink=!1,i}function hn(n,e,a){let s=n.match(a.other.indentCodeCompensation);if(s===null)return e;let o=s[1];return e.split(`
`).map(t=>{let r=t.match(a.other.beginningSpace);if(r===null)return t;let[u]=r;return u.length>=o.length?t.slice(o.length):t}).join(`
`)}var E=class{constructor(n){g(this,"options");g(this,"rules");g(this,"lexer");this.options=n||x}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let a=this.options.pedantic?e[0]:de(e[0]),s=a.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:a,codeBlockStyle:"indented",text:s}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let a=e[0],s=hn(a,e[3]||"",this.rules);return{type:"code",raw:a,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let a=e[2].trim();if(this.rules.other.endingHash.test(a)){let s=w(a,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(a=s.trim())}return{type:"heading",raw:w(e[0],`
`),depth:e[1].length,text:a,tokens:this.lexer.inline(a)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:w(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let a=w(e[0],`
`).split(`
`),s="",o="",t=[];for(;a.length>0;){let r=!1,u=[],i;for(i=0;i<a.length;i++)if(this.rules.other.blockquoteStart.test(a[i]))u.push(a[i]),r=!0;else if(!r)u.push(a[i]);else break;a=a.slice(i);let l=u.join(`
`),d=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${l}`:l,o=o?`${o}
${d}`:d;let p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,t,!0),this.lexer.state.top=p,a.length===0)break;let m=t.at(-1);if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){let b=m,c=b.raw+`
`+a.join(`
`),S=this.blockquote(c);t[t.length-1]=S,s=s.substring(0,s.length-b.raw.length)+S.raw,o=o.substring(0,o.length-b.text.length)+S.text;break}else if((m==null?void 0:m.type)==="list"){let b=m,c=b.raw+`
`+a.join(`
`),S=this.list(c);t[t.length-1]=S,s=s.substring(0,s.length-m.raw.length)+S.raw,o=o.substring(0,o.length-b.raw.length)+S.raw,a=c.substring(t.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:t,text:o}}}list(n){let e=this.rules.block.list.exec(n);if(e){let a=e[1].trim(),s=a.length>1,o={type:"list",raw:"",ordered:s,start:s?+a.slice(0,-1):"",loose:!1,items:[]};a=s?`\\d{1,9}\\${a.slice(-1)}`:`\\${a}`,this.options.pedantic&&(a=s?a:"[*+-]");let t=this.rules.other.listItemRegex(a),r=!1;for(;n;){let i=!1,l="",d="";if(!(e=t.exec(n))||this.rules.block.hr.test(n))break;l=e[0],n=n.substring(l.length);let p=mn(e[2].split(`
`,1)[0],e[1].length),m=n.split(`
`,1)[0],b=!p.trim(),c=0;if(this.options.pedantic?(c=2,d=p.trimStart()):b?c=e[1].length+1:(c=p.search(this.rules.other.nonSpaceChar),c=c>4?1:c,d=p.slice(c),c+=e[1].length),b&&this.rules.other.blankLine.test(m)&&(l+=m+`
`,n=n.substring(m.length+1),i=!0),!i){let S=this.rules.other.nextBulletRegex(c),f=this.rules.other.hrRegex(c),G=this.rules.other.fencesBeginRegex(c),C=this.rules.other.headingBeginRegex(c),V=this.rules.other.htmlBeginRegex(c),ye=this.rules.other.blockquoteBeginRegex(c);for(;n;){let N=n.split(`
`,1)[0],R;if(m=N,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),R=m):R=m.replace(this.rules.other.tabCharGlobal,"    "),G.test(m)||C.test(m)||V.test(m)||ye.test(m)||S.test(m)||f.test(m))break;if(R.search(this.rules.other.nonSpaceChar)>=c||!m.trim())d+=`
`+R.slice(c);else{if(b||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||G.test(p)||C.test(p)||f.test(p))break;d+=`
`+m}b=!m.trim(),l+=N+`
`,n=n.substring(N.length+1),p=R.slice(c)}}o.loose||(r?o.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(r=!0)),o.items.push({type:"list_item",raw:l,task:!!this.options.gfm&&this.rules.other.listIsTask.test(d),loose:!1,text:d,tokens:[]}),o.raw+=l}let u=o.items.at(-1);if(u)u.raw=u.raw.trimEnd(),u.text=u.text.trimEnd();else return;o.raw=o.raw.trimEnd();for(let i of o.items){this.lexer.state.top=!1,i.tokens=this.lexer.blockTokens(i.text,[]);let l=i.tokens[0];if(i.task&&((l==null?void 0:l.type)==="text"||(l==null?void 0:l.type)==="paragraph")){i.text=i.text.replace(this.rules.other.listReplaceTask,""),l.raw=l.raw.replace(this.rules.other.listReplaceTask,""),l.text=l.text.replace(this.rules.other.listReplaceTask,"");for(let p=this.lexer.inlineQueue.length-1;p>=0;p--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[p].src)){this.lexer.inlineQueue[p].src=this.lexer.inlineQueue[p].src.replace(this.rules.other.listReplaceTask,"");break}let d=this.rules.other.listTaskCheckbox.exec(i.raw);if(d){let p={type:"checkbox",raw:d[0]+" ",checked:d[0]!=="[ ]"};i.checked=p.checked,o.loose?i.tokens[0]&&["paragraph","text"].includes(i.tokens[0].type)&&"tokens"in i.tokens[0]&&i.tokens[0].tokens?(i.tokens[0].raw=p.raw+i.tokens[0].raw,i.tokens[0].text=p.raw+i.tokens[0].text,i.tokens[0].tokens.unshift(p)):i.tokens.unshift({type:"paragraph",raw:p.raw,text:p.raw,tokens:[p]}):i.tokens.unshift(p)}}else i.task&&(i.task=!1);if(!o.loose){let d=i.tokens.filter(m=>m.type==="space"),p=d.length>0&&d.some(m=>this.rules.other.anyLine.test(m.raw));o.loose=p}}if(o.loose)for(let i of o.items){i.loose=!0;for(let l of i.tokens)l.type==="text"&&(l.type="paragraph")}return o}}html(n){let e=this.rules.block.html.exec(n);if(e){let a=de(e[0]);return{type:"html",block:!0,raw:a,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:a}}}def(n){let e=this.rules.block.def.exec(n);if(e){let a=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:a,raw:w(e[0],`
`),href:s,title:o}}}table(n){var r;let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let a=ue(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=(r=e[3])!=null&&r.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],t={type:"table",raw:w(e[0],`
`),header:[],align:[],rows:[]};if(a.length===s.length){for(let u of s)this.rules.other.tableAlignRight.test(u)?t.align.push("right"):this.rules.other.tableAlignCenter.test(u)?t.align.push("center"):this.rules.other.tableAlignLeft.test(u)?t.align.push("left"):t.align.push(null);for(let u=0;u<a.length;u++)t.header.push({text:a[u],tokens:this.lexer.inline(a[u]),header:!0,align:t.align[u]});for(let u of o)t.rows.push(ue(u,t.header.length).map((i,l)=>({text:i,tokens:this.lexer.inline(i),header:!1,align:t.align[l]})));return t}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e){let a=e[1].trim();return{type:"heading",raw:w(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:a,tokens:this.lexer.inline(a)}}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let a=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:a,tokens:this.lexer.inline(a)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let a=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(a)){if(!this.rules.other.endAngleBracket.test(a))return;let t=w(a.slice(0,-1),"\\");if((a.length-t.length)%2===0)return}else{let t=pn(e[2],"()");if(t===-2)return;if(t>-1){let r=(e[0].indexOf("!")===0?5:4)+e[1].length+t;e[2]=e[2].substring(0,t),e[0]=e[0].substring(0,r).trim(),e[3]=""}}let s=e[2],o="";if(this.options.pedantic){let t=this.rules.other.pedanticHrefTitle.exec(s);t&&(s=t[1],o=t[3])}else o=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(a)?s=s.slice(1):s=s.slice(1,-1)),le(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let a;if((a=this.rules.inline.reflink.exec(n))||(a=this.rules.inline.nolink.exec(n))){let s=(a[2]||a[1]).replace(this.rules.other.multipleSpaceGlobal," "),o=e[s.toLowerCase()];if(!o){let t=a[0].charAt(0);return{type:"text",raw:t,text:t}}return le(a,o,a[0],this.lexer,this.rules)}}emStrong(n,e,a=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!(!s||!s[1]&&!s[2]&&!s[3]&&!s[4]||s[4]&&a.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[3])||!a||this.rules.inline.punctuation.exec(a))){let o=[...s[0]].length-1,t,r,u=o,i=0,l=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(l.lastIndex=0,e=e.slice(-1*n.length+o);(s=l.exec(e))!==null;){if(t=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!t)continue;if(r=[...t].length,s[3]||s[4]){u+=r;continue}else if((s[5]||s[6])&&o%3&&!((o+r)%3)){i+=r;continue}if(u-=r,u>0)continue;r=Math.min(r,r+u+i);let d=[...s[0]][0].length,p=n.slice(0,o+s.index+d+r);if(Math.min(o,r)%2){let b=p.slice(1,-1);return{type:"em",raw:p,text:b,tokens:this.lexer.inlineTokens(b)}}let m=p.slice(2,-2);return{type:"strong",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let a=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(a),o=this.rules.other.startingSpaceChar.test(a)&&this.rules.other.endingSpaceChar.test(a);return s&&o&&(a=a.substring(1,a.length-1)),{type:"codespan",raw:e[0],text:a}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n,e,a=""){let s=this.rules.inline.delLDelim.exec(n);if(s&&(!s[1]||!a||this.rules.inline.punctuation.exec(a))){let o=[...s[0]].length-1,t,r,u=o,i=this.rules.inline.delRDelim;for(i.lastIndex=0,e=e.slice(-1*n.length+o);(s=i.exec(e))!==null;){if(t=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!t||(r=[...t].length,r!==o))continue;if(s[3]||s[4]){u+=r;continue}if(u-=r,u>0)continue;r=Math.min(r,r+u);let l=[...s[0]][0].length,d=n.slice(0,o+s.index+l+r),p=d.slice(o,-o);return{type:"del",raw:d,text:p,tokens:this.lexer.inlineTokens(p)}}}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let a,s;return e[2]==="@"?(a=e[1],s="mailto:"+a):(a=e[1],s=a),{type:"link",raw:e[0],text:a,href:s,tokens:[{type:"text",raw:a,text:a}]}}}url(n){var a;let e;if(e=this.rules.inline.url.exec(n)){let s,o;if(e[2]==="@")s=e[0],o="mailto:"+s;else{let t;do t=e[0],e[0]=((a=this.rules.inline._backpedal.exec(e[0]))==null?void 0:a[0])??"";while(t!==e[0]);s=e[0],e[1]==="www."?o="http://"+e[0]:o=e[0]}return{type:"link",raw:e[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let a=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:a}}}},y=class F{constructor(e){g(this,"tokens");g(this,"options");g(this,"state");g(this,"inlineQueue");g(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||x,this.options.tokenizer=this.options.tokenizer||new E,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let a={other:k,block:T.normal,inline:A.normal};this.options.pedantic?(a.block=T.pedantic,a.inline=A.pedantic):this.options.gfm&&(a.block=T.gfm,this.options.breaks?a.inline=A.breaks:a.inline=A.gfm),this.tokenizer.rules=a}static get rules(){return{block:T,inline:A}}static lex(e,a){return new F(a).lex(e)}static lexInline(e,a){return new F(a).inlineTokens(e)}lex(e){e=e.replace(k.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let a=0;a<this.inlineQueue.length;a++){let s=this.inlineQueue[a];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,a=[],s=!1){var t,r,u;this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(k.tabCharGlobal,"    ").replace(k.spaceLine,""));let o=1/0;for(;e;){if(e.length<o)o=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if((r=(t=this.options.extensions)==null?void 0:t.block)!=null&&r.some(d=>(i=d.call({lexer:this},e,a))?(e=e.substring(i.raw.length),a.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let d=a.at(-1);i.raw.length===1&&d!==void 0?d.raw+=`
`:a.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let d=a.at(-1);(d==null?void 0:d.type)==="paragraph"||(d==null?void 0:d.type)==="text"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+i.raw,d.text+=`
`+i.text,this.inlineQueue.at(-1).src=d.text):a.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),a.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),a.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),a.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),a.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),a.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),a.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let d=a.at(-1);(d==null?void 0:d.type)==="paragraph"||(d==null?void 0:d.type)==="text"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+i.raw,d.text+=`
`+i.raw,this.inlineQueue.at(-1).src=d.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},a.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),a.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),a.push(i);continue}let l=e;if((u=this.options.extensions)!=null&&u.startBlock){let d=1/0,p=e.slice(1),m;this.options.extensions.startBlock.forEach(b=>{m=b.call({lexer:this},p),typeof m=="number"&&m>=0&&(d=Math.min(d,m))}),d<1/0&&d>=0&&(l=e.substring(0,d+1))}if(this.state.top&&(i=this.tokenizer.paragraph(l))){let d=a.at(-1);s&&(d==null?void 0:d.type)==="paragraph"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+i.raw,d.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):a.push(i),s=l.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let d=a.at(-1);(d==null?void 0:d.type)==="text"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+i.raw,d.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):a.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,a}inline(e,a=[]){return this.inlineQueue.push({src:e,tokens:a}),a}inlineTokens(e,a=[]){var l,d,p,m,b;this.tokenizer.lexer=this;let s=e,o=null;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(s))!==null;)c.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(s))!==null;)s=s.slice(0,o.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let t;for(;(o=this.tokenizer.rules.inline.blockSkip.exec(s))!==null;)t=o[2]?o[2].length:0,s=s.slice(0,o.index+t)+"["+"a".repeat(o[0].length-t-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=((d=(l=this.options.hooks)==null?void 0:l.emStrongMask)==null?void 0:d.call({lexer:this},s))??s;let r=!1,u="",i=1/0;for(;e;){if(e.length<i)i=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(u=""),r=!1;let c;if((m=(p=this.options.extensions)==null?void 0:p.inline)!=null&&m.some(f=>(c=f.call({lexer:this},e,a))?(e=e.substring(c.raw.length),a.push(c),!0):!1))continue;if(c=this.tokenizer.escape(e)){e=e.substring(c.raw.length),a.push(c);continue}if(c=this.tokenizer.tag(e)){e=e.substring(c.raw.length),a.push(c);continue}if(c=this.tokenizer.link(e)){e=e.substring(c.raw.length),a.push(c);continue}if(c=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(c.raw.length);let f=a.at(-1);c.type==="text"&&(f==null?void 0:f.type)==="text"?(f.raw+=c.raw,f.text+=c.text):a.push(c);continue}if(c=this.tokenizer.emStrong(e,s,u)){e=e.substring(c.raw.length),a.push(c);continue}if(c=this.tokenizer.codespan(e)){e=e.substring(c.raw.length),a.push(c);continue}if(c=this.tokenizer.br(e)){e=e.substring(c.raw.length),a.push(c);continue}if(c=this.tokenizer.del(e,s,u)){e=e.substring(c.raw.length),a.push(c);continue}if(c=this.tokenizer.autolink(e)){e=e.substring(c.raw.length),a.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(e))){e=e.substring(c.raw.length),a.push(c);continue}let S=e;if((b=this.options.extensions)!=null&&b.startInline){let f=1/0,G=e.slice(1),C;this.options.extensions.startInline.forEach(V=>{C=V.call({lexer:this},G),typeof C=="number"&&C>=0&&(f=Math.min(f,C))}),f<1/0&&f>=0&&(S=e.substring(0,f+1))}if(c=this.tokenizer.inlineText(S)){e=e.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(u=c.raw.slice(-1)),r=!0;let f=a.at(-1);(f==null?void 0:f.type)==="text"?(f.raw+=c.raw,f.text+=c.text):a.push(c);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return a}infiniteLoopError(e){let a="Infinite loop on byte: "+e;if(this.options.silent)console.error(a);else throw new Error(a)}},B=class{constructor(n){g(this,"options");g(this,"parser");this.options=n||x}space(n){return""}code({text:n,lang:e,escaped:a}){var t;let s=(t=(e||"").match(k.notSpaceStart))==null?void 0:t[0],o=n.replace(k.endingNewline,"")+`
`;return s?'<pre><code class="language-'+H(s)+'">'+(a?o:H(o,!0))+`</code></pre>
`:"<pre><code>"+(a?o:H(o,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){let e=n.ordered,a=n.start,s="";for(let r=0;r<n.items.length;r++){let u=n.items[r];s+=this.listitem(u)}let o=e?"ol":"ul",t=e&&a!==1?' start="'+a+'"':"";return"<"+o+t+`>
`+s+"</"+o+`>
`}listitem(n){return`<li>${this.parser.parse(n.tokens)}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",a="";for(let o=0;o<n.header.length;o++)a+=this.tablecell(n.header[o]);e+=this.tablerow({text:a});let s="";for(let o=0;o<n.rows.length;o++){let t=n.rows[o];a="";for(let r=0;r<t.length;r++)a+=this.tablecell(t[r]);s+=this.tablerow({text:a})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let e=this.parser.parseInline(n.tokens),a=n.header?"th":"td";return(n.align?`<${a} align="${n.align}">`:`<${a}>`)+e+`</${a}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${H(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:a}){let s=this.parser.parseInline(a),o=re(n);if(o===null)return s;n=o;let t='<a href="'+n+'"';return e&&(t+=' title="'+H(e)+'"'),t+=">"+s+"</a>",t}image({href:n,title:e,text:a,tokens:s}){s&&(a=this.parser.parseInline(s,this.parser.textRenderer));let o=re(n);if(o===null)return H(a);n=o;let t=`<img src="${n}" alt="${H(a)}"`;return e&&(t+=` title="${H(e)}"`),t+=">",t}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:H(n.text)}},oe=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},z=class X{constructor(e){g(this,"options");g(this,"renderer");g(this,"textRenderer");this.options=e||x,this.options.renderer=this.options.renderer||new B,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new oe}static parse(e,a){return new X(a).parse(e)}static parseInline(e,a){return new X(a).parseInline(e)}parse(e){var s,o;this.renderer.parser=this;let a="";for(let t=0;t<e.length;t++){let r=e[t];if((o=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&o[r.type]){let i=r,l=this.options.extensions.renderers[i.type].call({parser:this},i);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(i.type)){a+=l||"";continue}}let u=r;switch(u.type){case"space":{a+=this.renderer.space(u);break}case"hr":{a+=this.renderer.hr(u);break}case"heading":{a+=this.renderer.heading(u);break}case"code":{a+=this.renderer.code(u);break}case"table":{a+=this.renderer.table(u);break}case"blockquote":{a+=this.renderer.blockquote(u);break}case"list":{a+=this.renderer.list(u);break}case"checkbox":{a+=this.renderer.checkbox(u);break}case"html":{a+=this.renderer.html(u);break}case"def":{a+=this.renderer.def(u);break}case"paragraph":{a+=this.renderer.paragraph(u);break}case"text":{a+=this.renderer.text(u);break}default:{let i='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return a}parseInline(e,a=this.renderer){var o,t;this.renderer.parser=this;let s="";for(let r=0;r<e.length;r++){let u=e[r];if((t=(o=this.options.extensions)==null?void 0:o.renderers)!=null&&t[u.type]){let l=this.options.extensions.renderers[u.type].call({parser:this},u);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(u.type)){s+=l||"";continue}}let i=u;switch(i.type){case"escape":{s+=a.text(i);break}case"html":{s+=a.html(i);break}case"link":{s+=a.link(i);break}case"image":{s+=a.image(i);break}case"checkbox":{s+=a.checkbox(i);break}case"strong":{s+=a.strong(i);break}case"em":{s+=a.em(i);break}case"codespan":{s+=a.codespan(i);break}case"br":{s+=a.br(i);break}case"del":{s+=a.del(i);break}case"text":{s+=a.text(i);break}default:{let l='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}},I,_=(I=class{constructor(n){g(this,"options");g(this,"block");this.options=n||x}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(n=this.block){return n?y.lex:y.lexInline}provideParser(n=this.block){return n?z.parse:z.parseInline}},g(I,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),g(I,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),I),vn=class{constructor(...n){g(this,"defaults",K());g(this,"options",this.setOptions);g(this,"parse",this.parseMarkdown(!0));g(this,"parseInline",this.parseMarkdown(!1));g(this,"Parser",z);g(this,"Renderer",B);g(this,"TextRenderer",oe);g(this,"Lexer",y);g(this,"Tokenizer",E);g(this,"Hooks",_);this.use(...n)}walkTokens(n,e){var s,o;let a=[];for(let t of n)switch(a=a.concat(e.call(this,t)),t.type){case"table":{let r=t;for(let u of r.header)a=a.concat(this.walkTokens(u.tokens,e));for(let u of r.rows)for(let i of u)a=a.concat(this.walkTokens(i.tokens,e));break}case"list":{let r=t;a=a.concat(this.walkTokens(r.items,e));break}default:{let r=t;(o=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&o[r.type]?this.defaults.extensions.childTokens[r.type].forEach(u=>{let i=r[u].flat(1/0);a=a.concat(this.walkTokens(i,e))}):r.tokens&&(a=a.concat(this.walkTokens(r.tokens,e)))}}return a}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(a=>{let s={...a};if(s.async=this.defaults.async||s.async||!1,a.extensions&&(a.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){let t=e.renderers[o.name];t?e.renderers[o.name]=function(...r){let u=o.renderer.apply(this,r);return u===!1&&(u=t.apply(this,r)),u}:e.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let t=e[o.level];t?t.unshift(o.tokenizer):e[o.level]=[o.tokenizer],o.start&&(o.level==="block"?e.startBlock?e.startBlock.push(o.start):e.startBlock=[o.start]:o.level==="inline"&&(e.startInline?e.startInline.push(o.start):e.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(e.childTokens[o.name]=o.childTokens)}),s.extensions=e),a.renderer){let o=this.defaults.renderer||new B(this.defaults);for(let t in a.renderer){if(!(t in o))throw new Error(`renderer '${t}' does not exist`);if(["options","parser"].includes(t))continue;let r=t,u=a.renderer[r],i=o[r];o[r]=(...l)=>{let d=u.apply(o,l);return d===!1&&(d=i.apply(o,l)),d||""}}s.renderer=o}if(a.tokenizer){let o=this.defaults.tokenizer||new E(this.defaults);for(let t in a.tokenizer){if(!(t in o))throw new Error(`tokenizer '${t}' does not exist`);if(["options","rules","lexer"].includes(t))continue;let r=t,u=a.tokenizer[r],i=o[r];o[r]=(...l)=>{let d=u.apply(o,l);return d===!1&&(d=i.apply(o,l)),d}}s.tokenizer=o}if(a.hooks){let o=this.defaults.hooks||new _;for(let t in a.hooks){if(!(t in o))throw new Error(`hook '${t}' does not exist`);if(["options","block"].includes(t))continue;let r=t,u=a.hooks[r],i=o[r];_.passThroughHooks.has(t)?o[r]=l=>{if(this.defaults.async&&_.passThroughHooksRespectAsync.has(t))return(async()=>{let p=await u.call(o,l);return i.call(o,p)})();let d=u.call(o,l);return i.call(o,d)}:o[r]=(...l)=>{if(this.defaults.async)return(async()=>{let p=await u.apply(o,l);return p===!1&&(p=await i.apply(o,l)),p})();let d=u.apply(o,l);return d===!1&&(d=i.apply(o,l)),d}}s.hooks=o}if(a.walkTokens){let o=this.defaults.walkTokens,t=a.walkTokens;s.walkTokens=function(r){let u=[];return u.push(t.call(this,r)),o&&(u=u.concat(o.call(this,r))),u}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return y.lex(n,e??this.defaults)}parser(n,e){return z.parse(n,e??this.defaults)}parseMarkdown(n){return(e,a)=>{let s={...a},o={...this.defaults,...s},t=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&s.async===!1)return t(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return t(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return t(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(o.hooks&&(o.hooks.options=o,o.hooks.block=n),o.async)return(async()=>{let r=o.hooks?await o.hooks.preprocess(e):e,u=await(o.hooks?await o.hooks.provideLexer(n):n?y.lex:y.lexInline)(r,o),i=o.hooks?await o.hooks.processAllTokens(u):u;o.walkTokens&&await Promise.all(this.walkTokens(i,o.walkTokens));let l=await(o.hooks?await o.hooks.provideParser(n):n?z.parse:z.parseInline)(i,o);return o.hooks?await o.hooks.postprocess(l):l})().catch(t);try{o.hooks&&(e=o.hooks.preprocess(e));let r=(o.hooks?o.hooks.provideLexer(n):n?y.lex:y.lexInline)(e,o);o.hooks&&(r=o.hooks.processAllTokens(r)),o.walkTokens&&this.walkTokens(r,o.walkTokens);let u=(o.hooks?o.hooks.provideParser(n):n?z.parse:z.parseInline)(r,o);return o.hooks&&(u=o.hooks.postprocess(u)),u}catch(r){return t(r)}}}onError(n,e){return a=>{if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let s="<p>An error occurred:</p><pre>"+H(a.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(a);throw a}}},L=new vn;function v(n,e){return L.parse(n,e)}v.options=v.setOptions=function(n){return L.setOptions(n),v.defaults=L.defaults,ce(v.defaults),v};v.getDefaults=K;v.defaults=x;v.use=function(...n){return L.use(...n),v.defaults=L.defaults,ce(v.defaults),v};v.walkTokens=function(n,e){return L.walkTokens(n,e)};v.parseInline=L.parseInline;v.Parser=z;v.parser=z.parse;v.Renderer=B;v.TextRenderer=oe;v.Lexer=y;v.lexer=y.lex;v.Tokenizer=E;v.Hooks=_;v.parse=v;v.options;v.setOptions;v.use;v.walkTokens;v.parseInline;z.parse;y.lex;v.setOptions({gfm:!0,breaks:!1});const gn=/^(?:https?:|mailto:|tel:|#|\/|\.\/|\.\.\/)/i;v.use({walkTokens(n){if(n.type==="html")n.text="";else if(n.type==="link"||n.type==="image"){const e=n;(!e.href||!gn.test(e.href.trim()))&&(e.href="#")}}});const fn=Object.assign({"./content/back-up-emulator-saves/de.md":qe,"./content/back-up-emulator-saves/en.md":Le,"./content/back-up-emulator-saves/es.md":xe,"./content/back-up-emulator-saves/fr.md":Pe,"./content/back-up-emulator-saves/it.md":De,"./content/back-up-emulator-saves/ja.md":Oe,"./content/back-up-emulator-saves/pt.md":Re,"./content/back-up-emulator-saves/zh.md":Ae,"./content/back-up-game-saves/de.md":_e,"./content/back-up-game-saves/en.md":je,"./content/back-up-game-saves/es.md":Ge,"./content/back-up-game-saves/fr.md":Te,"./content/back-up-game-saves/it.md":Ie,"./content/back-up-game-saves/ja.md":We,"./content/back-up-game-saves/pt.md":Ee,"./content/back-up-game-saves/zh.md":Be,"./content/game-save-sync-comparison/de.md":Me,"./content/game-save-sync-comparison/en.md":$e,"./content/game-save-sync-comparison/es.md":Ve,"./content/game-save-sync-comparison/fr.md":Ne,"./content/game-save-sync-comparison/it.md":Ue,"./content/game-save-sync-comparison/ja.md":Fe,"./content/game-save-sync-comparison/pt.md":Xe,"./content/game-save-sync-comparison/zh.md":Ke,"./content/ludusavi-alternative/de.md":Ze,"./content/ludusavi-alternative/en.md":Qe,"./content/ludusavi-alternative/es.md":Je,"./content/ludusavi-alternative/fr.md":Ye,"./content/ludusavi-alternative/it.md":ea,"./content/ludusavi-alternative/ja.md":aa,"./content/ludusavi-alternative/pt.md":na,"./content/ludusavi-alternative/zh.md":oa,"./content/restore-a-game-save/de.md":sa,"./content/restore-a-game-save/en.md":ia,"./content/restore-a-game-save/es.md":ta,"./content/restore-a-game-save/fr.md":ra,"./content/restore-a-game-save/it.md":ua,"./content/restore-a-game-save/ja.md":da,"./content/restore-a-game-save/pt.md":la,"./content/restore-a-game-save/zh.md":ca,"./content/self-host-hoard/de.md":pa,"./content/self-host-hoard/en.md":ma,"./content/self-host-hoard/es.md":ha,"./content/self-host-hoard/fr.md":va,"./content/self-host-hoard/it.md":ga,"./content/self-host-hoard/ja.md":fa,"./content/self-host-hoard/pt.md":ba,"./content/self-host-hoard/zh.md":ka,"./content/sync-game-saves-across-pcs/de.md":Sa,"./content/sync-game-saves-across-pcs/en.md":ya,"./content/sync-game-saves-across-pcs/es.md":za,"./content/sync-game-saves-across-pcs/fr.md":Ha,"./content/sync-game-saves-across-pcs/it.md":wa,"./content/sync-game-saves-across-pcs/ja.md":Ca,"./content/sync-game-saves-across-pcs/pt.md":qa,"./content/sync-game-saves-across-pcs/zh.md":La});function bn(n){const e=n.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!e)return{meta:{},body:n};const a={};for(const s of e[1].split(/\r?\n/)){const o=s.indexOf(":");if(o===-1)continue;const t=s.slice(0,o).trim();let r=s.slice(o+1).trim();(r.startsWith('"')&&r.endsWith('"')||r.startsWith("'")&&r.endsWith("'"))&&(r=r.slice(1,-1)),a[t]=r}return{meta:a,body:e[2]}}const D={};for(const[n,e]of Object.entries(fn)){const a=n.match(/\/content\/([^/]+)\/([^/]+)\.md$/);if(!a)continue;const[,s,o]=a;if(!we.includes(o))continue;const{meta:t,body:r}=bn(e);(D[s]??(D[s]={}))[o]={slug:s,title:t.title??s,description:t.description??"",order:Number(t.order??999),featured:t.featured==="true",updated:t.updated??"",html:v.parse(r.trim())}}function kn(n,e){const a=D[n];return a?a[e]??a[Ce]??null:null}function zn(n){return Object.keys(D).map(e=>kn(e,n)).filter(e=>e!==null).sort((e,a)=>e.order-a.order||e.title.localeCompare(a.title))}function Hn(){return Object.keys(D)}export{Hn as a,kn as g,zn as l};
