function Header() {
    return (
        <div>
            <header className="sticky top-0 z-20 flex h-[60px] items-center border-b border-surface-line bg-surface-card px-4 lg:h-topbar lg:px-6">
                <button type="button" data-sidebar-toggle className="mr-3 inline-flex h-10 w-10 items-center justify-center rounded-base border border-surface-line text-ink-700 hover:bg-surface-muted lg:hidden" aria-controls="admin-sidebar" aria-expanded="false" aria-label="Open sidebar">
                    <i data-lucide="menu" className="h-5 w-5" />
                </button>
                <a href="index.html" className="absolute left-1/2 -translate-x-1/2 lg:hidden" aria-label="Unimart dashboard">
                    <img src="assets/images/logo/logo.webp" alt="Unimart" width={142} height={32} decoding="async" className="h-7 w-auto dark:hidden" />
                    <img src="assets/images/logo/logo-blackbg.webp" alt="Unimart" width={142} height={32} loading="lazy" decoding="async" className="hidden h-7 w-auto dark:block" />
                </a>
                <form className="hidden w-full max-w-[520px] items-center lg:flex" role="search">
                    <label htmlFor="global-search" className="sr-only">Search dashboard</label>
                    <input id="global-search" type="search" placeholder="Search Unimart .." className="h-10 flex-1 rounded-l-card border border-r-0 border-surface-line bg-surface-body px-5 text-[15px] text-ink-700 placeholder:text-ink-400 focus:border-brand-600" />
                    <button type="submit" className="inline-flex h-10 w-14 items-center justify-center rounded-r-card bg-brand-600 text-white hover:bg-brand-700" aria-label="Submit search">
                        <i data-lucide="search" className="h-5 w-5" />
                    </button>
                </form>
                <div className="ml-auto flex items-center gap-2 sm:gap-4">
                    <a href="notifications.html" className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-700 hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-card" aria-label="Notifications, 4 unread">
                        <i data-lucide="bell" className="h-5 w-5" />
                        <span className="absolute right-1 top-1 grid h-5 min-w-5 place-items-center rounded-full bg-danger-500 px-1 text-[11px] font-semibold leading-none text-white">4</span>
                    </a>
                    <button type="button" data-theme-toggle className="hidden h-10 w-10 items-center justify-center rounded-full text-ink-700 hover:bg-surface-muted sm:inline-flex" aria-label="Toggle quiet mode" aria-pressed="false">
                        <i data-lucide="moon" className="h-5 w-5" />
                    </button>
                    <div className="relative">
                        <button type="button" data-menu-toggle="topbar-user" className="flex items-center gap-3 rounded-card px-2 py-1.5 hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-card" aria-controls="topbar-user-menu" aria-expanded="false" aria-haspopup="menu" aria-label="Emay Walter Admin - open account menu">
                            <img className="h-10 w-10 rounded-full border border-surface-line object-cover" src="assets/avatars/admin-avatar.svg" alt="Emay Walter" />
                            <span className="hidden text-left lg:block">
                                <span className="block text-[15px] font-semibold leading-tight text-ink-900">Emay Walter</span>
                                <span className="flex items-center gap-1 text-[13px] text-ink-500">Admin <i data-lucide="chevron-down" className="h-3.5 w-3.5" /></span>
                            </span>
                        </button>
                        <div id="topbar-user-menu" data-menu="topbar-user" className="absolute right-0 top-full z-50 mt-2 hidden w-64 rounded-card border border-surface-line bg-surface-card p-1.5 shadow-lift" role="menu">
                            <div className="flex items-center gap-3 border-b border-surface-line px-2 pb-3 pt-2">
                                <img src="assets/avatars/admin-avatar.svg" alt="Emay Walter" className="h-9 w-9 rounded-full object-cover" />
                                <span className="min-w-0 flex-1">
                                    <span className="block truncate text-[14px] font-semibold text-ink-900">Emay Walter</span>
                                    <span className="block truncate text-[12px] text-ink-400"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="4b2a2f2622250b3e2522262a393f652724282a27">[email&nbsp;protected]</a></span>
                                </span>
                            </div>
                            <div className="space-y-0.5 py-1.5">
                                <a href="settings.html" role="menuitem" className="flex items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"><i data-lucide="settings" className="h-[18px] w-[18px] text-ink-500" /> Profile Setting</a>
                                <a href="notifications.html" role="menuitem" className="flex items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"><i data-lucide="bell" className="h-[18px] w-[18px] text-ink-500" /> Notifications</a>
                                <a href="history.html" role="menuitem" className="flex items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"><i data-lucide="history" className="h-[18px] w-[18px] text-ink-500" /> History</a>
                            </div>
                            <div className="border-t border-surface-line py-1.5">
                                <a href="update-app.html" role="menuitem" className="flex items-center gap-3 rounded-base bg-success-50 px-2 py-2 text-[14px] font-semibold text-success-600 transition-colors hover:bg-success-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600">
                                    <span className="h-2 w-2 rounded-full bg-success-500" /> Update App
                                </a>
                                <a href="signin.html" role="menuitem" className="mt-0.5 flex items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"><i data-lucide="log-out" className="h-[18px] w-[18px] text-ink-500" /> Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <aside id="admin-sidebar" data-sidebar className="dashboard-scrollbar fixed inset-y-0 left-0 z-40 flex w-sidebar -translate-x-full flex-col border-r border-surface-line bg-surface-card text-ink-700 lg:translate-x-0" aria-label="Primary navigation">
                {/* Header: workspace switcher + collapse toggle */}
                <div className="sidebar-header relative flex items-center gap-2 p-3">
                    <a href="index.html" className="ws-switch flex flex-1 items-center gap-2 rounded-base px-2 py-1.5" aria-label="Unimart dashboard">
                        <img src="assets/images/logo/logo.webp" alt="Unimart" width={142} height={32} decoding="async" className="logo-full h-8 w-auto dark:hidden max-w-[300px]" />
                        <img src="assets/images/logo/logo-blackbg.webp" alt="Unimart" width={142} height={32} loading="lazy" decoding="async" className="logo-full hidden h-8 w-auto dark:block" />
                        <img src="assets/images/favicon.png" alt="Unimart" width={36} height={36} loading="lazy" decoding="async" className="logo-mark hidden h-9 w-9 shrink-0 rounded-lg object-contain" />
                    </a>
                    <button type="button" data-sidebar-collapse className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-base text-ink-400 transition-colors hover:bg-surface-muted hover:text-ink-700 lg:inline-flex" aria-label="Collapse sidebar">
                        <i data-lucide="panel-left" className="h-[18px] w-[18px]" />
                    </button>
                    <button type="button" data-sidebar-toggle className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-base text-ink-400 hover:bg-surface-muted lg:hidden" aria-label="Close sidebar">
                        <i data-lucide="x" className="h-5 w-5" />
                    </button>
                </div>
                {/* Search */}
                <div className="nav-search px-3">
                    <div className="relative">
                        <i data-lucide="search" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                        <input type="search" placeholder="Search" className="h-10 w-full rounded-base border border-surface-line bg-surface-muted/50 pl-9 pr-12 text-[14px] text-ink-700 placeholder:text-ink-400 focus:border-brand-600" />
                        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-surface-line bg-surface-card px-1.5 py-0.5 text-[11px] font-medium text-ink-400">⌘1</kbd>
                    </div>
                </div>
                {/* Scrollable nav */}
                <nav className="dashboard-scrollbar mt-3 flex-1 space-y-0.5 overflow-y-auto px-3 pb-3">
                    {/* Dashboard */}
                    <a data-nav="dashboard" href="index.html" title="Dashboard" className="sidebar-link flex items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted">
                        <i data-lucide="layout-dashboard" className="h-[18px] w-[18px] shrink-0 text-ink-500" />
                        <span className="nav-text flex-1">Dashboard</span>
                    </a>
                    {/* Product */}
                    <div data-nav-group data-open="false">
                        <button type="button" data-nav-trigger title="Product" className="sidebar-link flex w-full items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted" aria-expanded="false">
                            <i data-lucide="store" className="h-[18px] w-[18px] shrink-0 text-ink-500" />
                            <span className="nav-text flex-1 text-left">Product</span>
                            <i data-lucide="chevron-right" data-nav-chevron className="nav-text h-4 w-4 shrink-0 text-ink-400 transition-transform duration-300" />
                        </button>
                        <div data-nav-submenu className="nav-text grid grid-rows-[0fr] transition-all duration-300 ease-in-out">
                            <div className="overflow-hidden">
                                <div className="mt-0.5 space-y-0.5 pl-9 text-[13px]">
                                    <a data-nav="products" href="products.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Products</a>
                                    <a data-nav="add-product" href="add-product.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Add New Product</a>
                                    <a data-nav="edit-product" href="edit-product.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Edit Product</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

            </aside>

        </div>
    );
}


export default Header;