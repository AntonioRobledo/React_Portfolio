import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav className='sticky top-0 bg-gradient-to-r from-green-300 to-purple-300 p-4'>
            <h1 className='flex justify-start font-bold text-3xl font-mono text-slate-700 opacity-90'>Antonio Robledo-Ysasaga</h1>
                <ul className='flex justify-end text-xl font-bold m-4 gap-6 font-mono text-slate-700 opacity-90'>
                    <li className='hover:scale-105'>
                        <a
                        href='#home'
                        onClick={() => handlePageChange('Home')}
                        // This is a conditional (ternary) operator that checks to see if the current page is "Hoem"
                        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                            Home
                        </a>
                    </li>
                    <li className='hover:scale-105'>
                        <a 
                        href='#projects'
                        onClick={() => handlePageChange('Projects')}
                        className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                        >
                            Projects
                        </a>
                    </li>
                    <li className='hover:scale-105'>
                        <a
                        href='#contact'
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </a>
                    </li>
                    <li className='hover:scale-105'>
                        <a 
                        href='#resume'
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
                        >
                            Resume
                        </a>
                    </li>
                </ul>
        </nav>
    );
}

export default NavTabs;