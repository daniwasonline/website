import { NavigationRoot } from '../components/Navigation';
import './globals.css'
import { Fredoka, Golos_Text, Inter, Outfit, Rubik } from 'next/font/google'
import { ColourProvider } from './Providers';

const inter = Inter({ subsets: ['latin'], variable: "--var-inter", display: "swap" })
const outfit = Outfit({ subsets: ['latin'], variable: "--var-outfit", display: "swap" });
const fredoka = Fredoka({ subsets: ['latin'], variable: "--var-fredoka", display: "swap" });

export const metadata = {
    title: 'Dani',
    description: 'Web design',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <ColourProvider>
                <body className={`${outfit.variable} ${inter.variable} ${fredoka.variable} font-sans px-8 sm:px-16 lg:px-48 xl:px-60 2xl:px-96 py-16`}>
                        <NavigationRoot />
                        <main className="flex flex-col min-h-screen py-8">
                            {children}
                        </main>
                </body>
            </ColourProvider>
        </html>
    )
}