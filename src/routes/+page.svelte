<div class="container perspective">
    <h1 class="font-chakra irc-title">
        <span class="illini">Illini</span>
        <span class="redstone">Redstone</span>
        <span class="computing">Computing</span>
    </h1>

    <div class="content">
        <div class="blurb">
            <h3>Welcome to the Illini Redstone Computing community!</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                in maiores, adipisci quas molestiae ratione voluptatum? Eius quo
                est nihil quae. Enim quasi repellendus quidem dicta possimus,
                laboriosam quo totam!
            </p>
        </div>
    </div>
</div>

<style>
    .perspective {
        perspective: 1000px;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        height: 100%;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 50rem;
        height: 100vh;
    }

    .irc-title {
        font-size: 5rem;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;

        display: flex;
        width: 100%;
        justify-content: center;
        gap: 3rem;

        margin-top: 10rem;
        transform: rotateX(5deg) translateZ(0);

        filter: brightness(1.4);
    }

    .illini {
        color: var(--color-illini-orange);
    }
    .redstone {
        color: var(--color-redstone);
    }
    .computing {
        color: var(--color-illini-blue);
    }

    .blurb {
        text-align: center;
        margin-top: 2rem;

        h3 {
            font-size: 1.7rem;
            font-weight: 400;
        }

        p {
            color: var(--color-text-muted);
            font-size: 1.1rem;
        }
    }
</style>
