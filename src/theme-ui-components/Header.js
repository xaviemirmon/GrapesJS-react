/** @jsxImportSource theme-ui */

import { Link } from "@theme-ui/components";

export const HeaderA1 = () => (
  <header
    sx={{
      display: "flex",
      alignItems: "center",
      variant: "styles.header",
    }}
  >
    <Link
      to="/"
      sx={{
        variant: "styles.navlink",
        p: 2,
      }}
    >
      Hello
    </Link>
    <div sx={{ mx: "auto" }} />
    <Link
      to="/blog"
      sx={{
        variant: "styles.navlink",
        p: 2,
      }}
    >
      Blog
    </Link>
    <Link
      to="/about"
      sx={{
        variant: "styles.navlink",
        p: 2,
      }}
    >
      About
    </Link>
  </header>
);

export const HeaderA2 = () => (
    <header
  sx={{
    variant: 'styles.header',
  }}>
  <div
    sx={{
      maxWidth: 768,
      mx: 'auto',
      px: 3,
      display: 'flex',
      alignItems: 'baseline',
    }}>
    <Link
      to="/"
      sx={{
        variant: 'styles.navlink',
        fontSize: 5,
        py: 2,
      }}>
      Hello
    </Link>
    <div sx={{ mx: 'auto' }} />
    <Link
      to="/blog"
      sx={{
        variant: 'styles.navlink',
        ml: 3,
        py: 2,
      }}>
      Blog
    </Link>
    <Link
      to="/about"
      sx={{
        variant: 'styles.navlink',
        ml: 3,
        py: 2,
      }}>
      About
    </Link>
  </div>
</header>
  );
  

export const HeaderA4 = () => (
  <header
    sx={{
      display: "grid",
      gridGap: 3,
      gridTemplateColumns: "repeat(3, 1fr)",
      px: 3,
      py: 4,
      alignItems: "center",
      variant: "styles.header",
    }}
  >
    <button
      title="Toggle Menu"
      sx={{
        appearance: "none",
        width: 32,
        height: 32,
        m: 0,
        p: 1,
        color: "inherit",
        bg: "transparent",
        border: 0,
        ":focus": {
          outline: "2px solid",
        },
        ":hover": {
          color: "primary",
        },
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentcolor"
        viewBox="0 0 24 24"
        sx={{
          display: "block",
          margin: 0,
        }}
      >
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </button>
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link
        to="/"
        sx={{
          variant: "styles.navlink",
          px: 3,
          py: 1,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          border: "4px solid",
          color: "primary",
        }}
      >
        Home
      </Link>
    </div>
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Link
        to="/blog"
        sx={{
          variant: "styles.navlink",
          ml: 3,
          py: 3,
        }}
      >
        Blog
      </Link>
      <Link
        to="/about"
        sx={{
          variant: "styles.navlink",
          ml: 3,
          py: 3,
        }}
      >
        About
      </Link>
    </div>
  </header>
);
