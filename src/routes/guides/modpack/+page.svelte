<script lang="ts">
    import BadgeList from "$lib/components/BadgeList.svelte";
</script>

<svelte:head><title>Modpack and tools | Illini Redstone Computing</title></svelte:head>

<div class="content-page">
<header class="intro transition-1">
    <p class="eyebrow">Guides</p>
    <h1 class="content-title">Modpack and tools</h1>
    <BadgeList badgeIds={["guide", "tutorial"]} />
</header>

<h2 class="page-heading">Minecraft Launcher</h2>

<p class="page-copy">
    We use and recommend the <span class="bold">Modrinth launcher</span>
    , however you can also use the
    <span class="bold">Prism launcher</span>
    . We do not include ready built modpacks for curseforge, however, you may make
    one yourself with the mod list.
</p>

<section class="section transition-2">
    <h3 class="page-heading">Installing Modrinth</h3>

    <p class="page-copy">
        The download page can be found <a
            href="https://modrinth.com/app"
            target="_blank">
            here
        </a>
        . On
        <span class="bold">Windows</span>
        , you will download the exe installer and run it. On
        <span class="bold">Linux</span>
        , you have to install the Modrinth flatpak package from
        <span class="bold">flathub</span>
        . Once downloaded and installed, you will have to sign into your Microsoft
        account to verify that you own the game.
    </p>
</section>

<section class="section transition-3">
    <h3 class="page-heading">Installing the Modpack</h3>

    <p class="page-copy">
        The modpack (.mrpack file) can be downloaded from the IRC <a
            href="https://github.com/IlliniRedstoneComputing/Modpacks"
            target="_blank">
            github
        </a>
        . If possible, you can simply open/double click the file once downloaded
        and Modrinth will automatically import the pack to be able to play. If that
        does not work, then you will click the
        <span class="bold">“Create Instance”</span>
        button on the home page and then
        <span class="bold">“Upload a modpack”</span>
        .
    </p>

    <p class="page-copy">
        After the modpack has been installed, you should see a redstone block
        icon on the left sidebar. Clicking it will open the modpack menu, and
        from there you can press play.
    </p>

    <p class="page-copy">
        The full mod list will be included at the bottom of the guide.
    </p>



</section>

<section class="section" aria-labelledby="mod-list">
<h2 id="mod-list" class="page-heading">Mod list</h2>
<div class="card-grid card-grid--two">
    <div class="info-card">
        <h4 class="card-title">Building</h4>

        <ul>
            <li>
                Axiom <span class="mod-description"
                    >(main building mod, supercedes worldedit)</span>
            </li>
            <li>
                Litematica <span class="mod-description"
                    >(schematic support)</span>
            </li>
            <li>
                Worldedit <span class="mod-description"
                    >(can still be useful sometimes)</span>
            </li>
            <li>
                Lite2Edit <span class="mod-description"
                    >(litematica schematic support for worldedit)</span>
            </li>
            <li>
                Archive Downloader <span class="mod-description"
                    >(Mattbatwings redstone schematic library)</span>
            </li>
        </ul>
    </div>
    <div class="info-card">
        <h4 class="card-title">Redstone and Debug</h4>

        <ul>
            <li>
                Alternate Current <span class="mod-description"
                    >(speeds up redstone)</span>
            </li>
            <li>
                G4meSpeed <span class="mod-description"
                    >(better support for higher tick speeds)</span>
            </li>
            <li>
                Carpet <span class="mod-description"
                    >(adds a lot of game options and utilities)</span>
            </li>
            <li>
                ChunkDebug <span class="mod-description"
                    >(shows loaded chunks as a map)</span>
            </li>
            <li>
                MattPack <span class="mod-description">(resource pack)</span>
            </li>
            <li>
                Ping Pong Pack <span class="mod-description"
                    >(resource pack)</span>
            </li>
            <li>
                Wueffis RegReader for Computational Redstone <span
                    class="mod-description"
                    >(read lamps as binary numbers)</span>
            </li>
            <li>
                Redstone Tweaks <span class="mod-description"
                    >(redstone information tools)</span>
            </li>
        </ul>
    </div>
    <div class="info-card">
        <h4 class="card-title">Game Utility</h4>

        <ul>
            <li>
                Controlling <span class="mod-description"
                    >(adds searchbar to keybinds)</span>
            </li>
            <li>
                Essential Mod <span class="mod-description"
                    >(peer to peer multiplayer)</span>
            </li>
            <li>
                ModMenu <span class="mod-description"
                    >(adds an in-game mod list)</span>
            </li>
            <li>
                Command Keys <span class="mod-description"
                    >(run command when a key is pressed)</span>
            </li>
        </ul>
    </div>
    <div class="info-card">
        <h4 class="card-title">Performance and Visual</h4>

        <ul>
            <li>Sodium</li>
            <li>Sodium Extra</li>
            <li>Reese's Sodium Options</li>
            <li>Iris Shaders</li>
            <li>
                Complementary Shaders Unbound <span class="mod-description"
                    >(shaderpack)</span>
            </li>
            <li>Ferrite Core</li>
            <li>Immediately Fast</li>
            <li>Lithium</li>
        </ul>
    </div>
    <div class="info-card">
        <h4 class="card-title">Library and Core</h4>

        <ul>
            <li>Fabric API</li>
            <li>Fabric Language Kotlin</li>
            <li>Searchables</li>
            <li>Text Placeholder API</li>
            <li>YetAnotherConfigLib</li>
            <li>MaLiLib</li>
            <li>MaLiLib API</li>
        </ul>
    </div>
</div>
</section>
</div>

<style>
    .mod-description { color: var(--color-text-muted); }
</style>
