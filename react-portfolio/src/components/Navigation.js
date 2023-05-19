import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav className='sticky top-0 bg-gradient-to-r from-cyan-500 to-teal-500 p-4'>
            <h1 className='flex justify-start font-bold text-3xl'>Antonio Robledo</h1>
                <ul className='flex justify-end text-xl font-bold m-4 gap-6 '>
                    <li>
                        <a
                        href='#about'
                        onClick={() => handlePageChange('About')}
                        // This is a conditional (ternary) operator that checks to see if the current page is "About"
                        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a 
                        href='#projects'
                        onClick={() => handlePageChange('Projects')}
                        className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                        href='#contact'
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </a>
                    </li>
                    <li>
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