import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import React from 'react';

const Layout = ({ children } : {children:React.ReactNode}) => (
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
      {children}
      </body>
    </html>
);

export default Layout;
