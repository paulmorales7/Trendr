import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import "./style.css";

function Footer() {
    return (
      <footer className="footer">
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </footer>
    );
  }

export default Footer;