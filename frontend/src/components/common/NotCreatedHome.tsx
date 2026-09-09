import React from 'react'

const NotCreatedHomePage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A0A0A] px-6 text-center text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
                Coming Soon
            </p>

            <h1 className="text-4xl font-semibold sm:text-5xl">
                This page is coming soon.
            </h1>

            <p className="mt-4 max-w-lg text-gray-400">
                We're currently working on this section. Please check back soon.
            </p>

            <button
                onClick={() => window.history.back()}
                className="mt-8 border border-white/20 px-6 py-3 text-sm transition hover:bg-white hover:text-black"
            >
                Go Back
            </button>
        </div>
    )
}

export default NotCreatedHomePage