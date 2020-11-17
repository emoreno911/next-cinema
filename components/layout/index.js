import React from 'react';
import Head from 'next/head';

function Layout({ children }) {
	return (
		<div className="root">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="theme-color" content="#FFFFFF" />
				<link rel="shortcut icon" href="/icon_dev.png" />

				<link href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" rel="stylesheet" />

				<title>Next Movies</title>
			</Head>

			{ children }
		</div>
	)
}

export default Layout;