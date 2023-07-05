import './globals.css'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Match Game',
	description: 'that nerd annoyed me',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex justify-center border-blue-500 border-2`}>
				<Suspense fallback={<p>Wait...</p>} >
					{children}
				</Suspense>
			</body>
		</html>
	)
}
