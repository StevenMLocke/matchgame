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
			<body className={`${inter.className} flex h-[100cqmax] sm:h-[100cqmin] justify-center items-center`}>
				<Suspense fallback={<p>Wait...</p>} >
					{children}
				</Suspense>
			</body>
		</html>
	)
}
