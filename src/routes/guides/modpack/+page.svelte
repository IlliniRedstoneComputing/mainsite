<div class="content">
    <h1>Illini Redstone Computing Modpack and Tool Guide</h1>

    <h2>Minecraft Launcher</h2>

    <p>
        We use and recommend the <span class="bold">Modrinth launcher</span>
        , however you can also use the
        <span class="bold">Prism launcher</span>
        . We do not include ready built modpacks for curseforge, however, you may
        make one yourself with the mod list.
    </p>

    <div class="transition-2">
        <h3>Installing Modrinth</h3>

        <p>
            The download page can be found <a
                href="https://modrinth.com/app"
                target="_blank"
            >
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
    </div>

    <div class="transition-3">
        <h3>Installing the Modpack</h3>

        <p>
            The modpack (.mrpack file) can be downloaded from the IRC <a
                href="https://github.com/IlliniRedstoneComputing/Modpacks"
                target="_blank"
            >
                github
            </a>
            . If possible, you can simply open/double click the file once downloaded
            and Modrinth will automatically import the pack to be able to play. If
            that does not work, then you will click the
            <span class="bold">“Create Instance”</span>
            button on the home page and then
            <span class="bold">“Upload a modpack”</span>
            .
        </p>

        <p>
            After the modpack has been installed, you should see a redstone
            block icon on the left sidebar. Clicking it will open the modpack
            menu, and from there you can press play.
        </p>

        <p>The full mod list will be included at the bottom of the guide.</p>

        <hr />

        <h2 class="">Modpack List</h2>
    </div>

    <div class="modlist">
        <div class="mod-category glass-card">
            <h4>Building</h4>

            <ul>
                <li>
                    Axiom <span class="mod-description"
                        >(main building mod, supercedes worldedit)</span
                    >
                </li>
                <li>
                    Litematica <span class="mod-description"
                        >(schematic support)</span
                    >
                </li>
                <li>
                    Worldedit <span class="mod-description"
                        >(can still be useful sometimes)</span
                    >
                </li>
                <li>
                    Lite2Edit <span class="mod-description"
                        >(litematica schematic support for worldedit)</span
                    >
                </li>
                <li>
                    Archive Downloader <span class="mod-description"
                        >(Mattbatwings redstone schematic library)</span
                    >
                </li>
            </ul>
        </div>
        <div class="mod-category glass-card">
            <h4>Redstone and Debug</h4>

            <ul>
                <li>
                    Alternate Current <span class="mod-description"
                        >(speeds up redstone)</span
                    >
                </li>
                <li>
                    G4meSpeed <span class="mod-description"
                        >(better support for higher tick speeds)</span
                    >
                </li>
                <li>
                    Carpet <span class="mod-description"
                        >(adds a lot of game options and utilities)</span
                    >
                </li>
                <li>
                    ChunkDebug <span class="mod-description"
                        >(shows loaded chunks as a map)</span
                    >
                </li>
                <li>
                    MattPack <span class="mod-description">(resource pack)</span
                    >
                </li>
                <li>
                    Ping Pong Pack <span class="mod-description"
                        >(resource pack)</span
                    >
                </li>
                <li>
                    Wueffis RegReader for Computational Redstone <span
                        class="mod-description"
                        >(read lamps as binary numbers)</span
                    >
                </li>
                <li>
                    Redstone Tweaks <span class="mod-description"
                        >(redstone information tools)</span
                    >
                </li>
            </ul>
        </div>
        <div class="mod-category glass-card">
            <h4>Game Utility</h4>

            <ul>
                <li>
                    Controlling <span class="mod-description"
                        >(adds searchbar to keybinds)</span
                    >
                </li>
                <li>
                    Essential Mod <span class="mod-description"
                        >(peer to peer multiplayer)</span
                    >
                </li>
                <li>
                    ModMenu <span class="mod-description"
                        >(adds an in-game mod list)</span
                    >
                </li>
                <li>
                    Command Keys <span class="mod-description"
                        >(run command when a key is pressed)</span
                    >
                </li>
            </ul>
        </div>
        <div class="mod-category glass-card">
            <h4>Performance and Visual</h4>

            <ul>
                <li>Sodium</li>
                <li>Sodium Extra</li>
                <li>Reese's Sodium Options</li>
                <li>Iris Shaders</li>
                <li>
                    Complementary Shaders Unbound <span class="mod-description"
                        >(shaderpack)</span
                    >
                </li>
                <li>Ferrite Core</li>
                <li>Immediately Fast</li>
                <li>Lithium</li>
            </ul>
        </div>
        <div class="mod-category glass-card">
            <h4>Library and Core</h4>

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
</div>

<style>
    .content {
        padding-inline: 2rem;
        /* margin-top: 5rem; */

        max-width: 80rem;

        margin-inline: auto;

        /* display: flex;
        flex-direction: column;

        gap: 5rem; */
    }
    .bold {
        font-weight: bold;
    }

    .mod-description {
        color: var(--color-text-muted);
        padding-left: 0.5rem;
    }

    h1 {
        text-align: center;
        margin: 2rem;
    }

    p {
        margin: 2rem;
        color: var(--color-text-slightly-muted);
    }

    hr {
        margin-block: 5rem;
    }

    ul {
        margin: 1rem;
        padding-left: 1rem;
    }

    .modlist {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
        gap: 1rem;

        padding-block: 3rem;
    }

    .mod-category {
        h4 {
            text-align: center;
            margin-bottom: 1rem;
        }
    }
</style>
