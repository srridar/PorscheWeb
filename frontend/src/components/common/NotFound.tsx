import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center text-[#2f2c2c] bg-black px-6 text-center'>

            <h1 className="text-8xl font-bold text-[#2f2c2c]">404</h1>

            <h2 className="mt-6 text-3xl font-semibold ">
                Page Not Found
            </h2>

            <p className="mt-3 max-w-md text-gray-500">
                Sorry, the page you're looking for doesn't exist or may have been
                moved.
            </p>

            <Link to="/" className="mt-8 rounded-full bg-gray-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
                Go back home
            </Link>
        </div>
    )
}

export default NotFound