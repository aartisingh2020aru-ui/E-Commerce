function Header() {
    return (
        <aside id="admin-sidebar" data-sidebar className="dashboard-scrollbar fixed inset-y-0 left-0 z-40 flex w-sidebar -translate-x-full flex-col border-r border-surface-line bg-surface-card text-ink-700 lg:translate-x-0" aria-label="Primary navigation">
                {/* Header: workspace switcher + collapse toggle */}
                <div className="sidebar-header relative flex items-center gap-2 p-3">
                    <a href="index.html" className="ws-switch flex flex-1 items-center gap-2 rounded-base px-2 py-1.5" aria-label="Unimart dashboard">
                        <img src="admin-assets/assets/images/logo/logo.webp" alt="Unimart" width={142} height={32} decoding="async" className="logo-full h-8 w-auto dark:hidden max-w-[300px]" />
                        <img src="admin-assets/assets/images/logo/logo-blackbg.webp" alt="Unimart" width={142} height={32} loading="lazy" decoding="async" className="logo-full hidden h-8 w-auto dark:block" />
                        <img src="admin-assets/assets/images/favicon.png" alt="Unimart" width={36} height={36} loading="lazy" decoding="async" className="logo-mark hidden h-9 w-9 shrink-0 rounded-lg object-contain" />
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
                                    <a data-nav="add-product" href="add-product.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Add
                                        New Product</a>
                                    <a data-nav="edit-product" href="edit-product.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Edit
                                        Product</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Category */}
                    <div data-nav-group data-open="false">
                        <button type="button" data-nav-trigger title="Category" className="sidebar-link flex w-full items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted" aria-expanded="false">
                            <i data-lucide="list-tree" className="h-[18px] w-[18px] shrink-0 text-ink-500" />
                            <span className="nav-text flex-1 text-left">Category</span>
                            <i data-lucide="chevron-right" data-nav-chevron className="nav-text h-4 w-4 shrink-0 text-ink-400 transition-transform duration-300" />
                        </button>
                        <div data-nav-submenu className="nav-text grid grid-rows-[0fr] transition-all duration-300 ease-in-out">
                            <div className="overflow-hidden">
                                <div className="mt-0.5 space-y-0.5 pl-9 text-[13px]">
                                    <a data-nav="categories" href="categories.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Category
                                        List</a>
                                    <a data-nav="add-category" href="add-category.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Add
                                        New Category</a>
                                    <a data-nav="edit-category" href="edit-category.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Edit
                                        Category</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Brand */}
                    <div data-nav-group data-open="false">
                        <button type="button" data-nav-trigger title="Brand" className="sidebar-link flex w-full items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted" aria-expanded="false">
                            <i data-lucide="star" className="h-[18px] w-[18px] shrink-0 text-ink-500" />
                            <span className="nav-text flex-1 text-left">Brand</span>
                            <i data-lucide="chevron-right" data-nav-chevron className="nav-text h-4 w-4 shrink-0 text-ink-400 transition-transform duration-300" />
                        </button>
                        <div data-nav-submenu className="nav-text grid grid-rows-[0fr] transition-all duration-300 ease-in-out">
                            <div className="overflow-hidden">
                                <div className="mt-0.5 space-y-0.5 pl-9 text-[13px]">
                                    <a data-nav="brands" href="brands.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Brand
                                        List</a>
                                    <a data-nav="add-brand" href="add-brand.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Add
                                        New Brand</a>
                                    <a data-nav="edit-brand" href="edit-brand.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Edit
                                        Brand</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Attributes */}
                    <div data-nav-group data-open="false">
                        <button type="button" data-nav-trigger title="Attributes" className="sidebar-link flex w-full items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted" aria-expanded="false">
                            <i data-lucide="sliders-horizontal" className="h-[18px] w-[18px] shrink-0 text-ink-500" />
                            <span className="nav-text flex-1 text-left">Attributes</span>
                            <i data-lucide="chevron-right" data-nav-chevron className="nav-text h-4 w-4 shrink-0 text-ink-400 transition-transform duration-300" />
                        </button>
                        <div data-nav-submenu className="nav-text grid grid-rows-[0fr] transition-all duration-300 ease-in-out">
                            <div className="overflow-hidden">
                                <div className="mt-0.5 space-y-0.5 pl-9 text-[13px]">
                                    <a data-nav="attributes" href="attributes.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Attributes</a>
                                    <a data-nav="add-attribute" href="add-attribute.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Add
                                        Attributes</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Users */}
                    <div data-nav-group data-open="false">
                        <button type="button" data-nav-trigger title="Users" className="sidebar-link flex w-full items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted" aria-expanded="false">
                            <i data-lucide="users" className="h-[18px] w-[18px] shrink-0 text-ink-500" />
                            <span className="nav-text flex-1 text-left">Users</span>
                            <i data-lucide="chevron-right" data-nav-chevron className="nav-text h-4 w-4 shrink-0 text-ink-400 transition-transform duration-300" />
                        </button>
                        <div data-nav-submenu className="nav-text grid grid-rows-[0fr] transition-all duration-300 ease-in-out">
                            <div className="overflow-hidden">
                                <div className="mt-0.5 space-y-0.5 pl-9 text-[13px]">
                                    <a data-nav="customers" href="customers.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">All
                                        Users</a>
                                    <a data-nav="add-user" href="add-user.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Add
                                        New User</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Roles */}
                    <div data-nav-group data-open="false">
                        <button type="button" data-nav-trigger title="Roles" className="sidebar-link flex w-full items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted" aria-expanded="false">
                            <i data-lucide="shield-check" className="h-[18px] w-[18px] shrink-0 text-ink-500" />
                            <span className="nav-text flex-1 text-left">Roles</span>
                            <i data-lucide="chevron-right" data-nav-chevron className="nav-text h-4 w-4 shrink-0 text-ink-400 transition-transform duration-300" />
                        </button>
                        <div data-nav-submenu className="nav-text grid grid-rows-[0fr] transition-all duration-300 ease-in-out">
                            <div className="overflow-hidden">
                                <div className="mt-0.5 space-y-0.5 pl-9 text-[13px]">
                                    <a data-nav="roles" href="roles.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">All
                                        Roles</a>
                                    <a data-nav="create-role" href="create-role.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Create
                                        Role</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Media */}
                    <a data-nav="media" href="media.html" title="Media" className="sidebar-link flex items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted">
                        <i data-lucide="image" className="h-[18px] w-[18px] shrink-0 text-ink-500" />
                        <span className="nav-text flex-1">Media</span>
                    </a>
                    {/* Orders */}
                    <div data-nav-group data-open="false">
                        <button type="button" data-nav-trigger title="Orders" className="sidebar-link flex w-full items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted" aria-expanded="false">
                            <i data-lucide="shopping-bag" className="h-[18px] w-[18px] shrink-0 text-ink-500" />
                            <span className="nav-text flex-1 text-left">Orders</span>
                            <i data-lucide="chevron-right" data-nav-chevron className="nav-text h-4 w-4 shrink-0 text-ink-400 transition-transform duration-300" />
                        </button>
                        <div data-nav-submenu className="nav-text grid grid-rows-[0fr] transition-all duration-300 ease-in-out">
                            <div className="overflow-hidden">
                                <div className="mt-0.5 space-y-0.5 pl-9 text-[13px]">
                                    <a data-nav="orders" href="orders.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Order
                                        List</a>
                                    <a data-nav="order-detail" href="order-detail.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Order
                                        Details</a>
                                    <a data-nav="add-order" href="add-order.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Add
                                        Order</a>
                                    <a data-nav="edit-order" href="edit-order.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Edit
                                        Order</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Localization */}
                    <div data-nav-group data-open="false">
                        <button type="button" data-nav-trigger title="Localization" className="sidebar-link flex w-full items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted" aria-expanded="false">
                            <i data-lucide="globe" className="h-[18px] w-[18px] shrink-0 text-ink-500" />
                            <span className="nav-text flex-1 text-left">Localization</span>
                            <i data-lucide="chevron-right" data-nav-chevron className="nav-text h-4 w-4 shrink-0 text-ink-400 transition-transform duration-300" />
                        </button>
                        <div data-nav-submenu className="nav-text grid grid-rows-[0fr] transition-all duration-300 ease-in-out">
                            <div className="overflow-hidden">
                                <div className="mt-0.5 space-y-0.5 pl-9 text-[13px]">
                                    <a data-nav="translation" href="translation.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Translation</a>
                                    <a data-nav="currency-rates" href="currency-rates.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Currency
                                        Rates</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Coupons */}
                    <div data-nav-group data-open="false">
                        <button type="button" data-nav-trigger title="Coupons" className="sidebar-link flex w-full items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted" aria-expanded="false">
                            <i data-lucide="badge-percent" className="h-[18px] w-[18px] shrink-0 text-ink-500" />
                            <span className="nav-text flex-1 text-left">Coupons</span>
                            <i data-lucide="chevron-right" data-nav-chevron className="nav-text h-4 w-4 shrink-0 text-ink-400 transition-transform duration-300" />
                        </button>
                        <div data-nav-submenu className="nav-text grid grid-rows-[0fr] transition-all duration-300 ease-in-out">
                            <div className="overflow-hidden">
                                <div className="mt-0.5 space-y-0.5 pl-9 text-[13px]">
                                    <a data-nav="coupons" href="coupons.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Coupon
                                        List</a>
                                    <a data-nav="add-coupon" href="add-coupon.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Create
                                        Coupon</a>
                                    <a data-nav="edit-coupon" href="edit-coupon.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Edit
                                        Coupon</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Tax */}
                    <a data-nav="tax" href="tax.html" title="Tax" className="sidebar-link flex items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted">
                        <i data-lucide="receipt" className="h-[18px] w-[18px] shrink-0 text-ink-500" />
                        <span className="nav-text flex-1">Tax</span>
                    </a>
                    {/* Product Review */}
                    <a data-nav="product-reviews" href="product-reviews.html" title="Product Reviews" className="sidebar-link flex items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted">
                        <i data-lucide="star" className="h-[18px] w-[18px] shrink-0 text-ink-500" />
                        <span className="nav-text flex-1">Product Reviews</span>
                    </a>
                    {/* Support Ticket */}
                    <a data-nav="support-tickets" href="support-tickets.html" title="Support Tickets" className="sidebar-link flex items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted">
                        <i data-lucide="life-buoy" className="h-[18px] w-[18px] shrink-0 text-ink-500" />
                        <span className="nav-text flex-1">Support Tickets</span>
                    </a>
                    {/* Settings */}
                    <div data-nav-group data-open="false">
                        <button type="button" data-nav-trigger title="Settings" className="sidebar-link flex w-full items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted" aria-expanded="false">
                            <i data-lucide="settings" className="h-[18px] w-[18px] shrink-0 text-ink-500" />
                            <span className="nav-text flex-1 text-left">Settings</span>
                            <i data-lucide="chevron-right" data-nav-chevron className="nav-text h-4 w-4 shrink-0 text-ink-400 transition-transform duration-300" />
                        </button>
                        <div data-nav-submenu className="nav-text grid grid-rows-[0fr] transition-all duration-300 ease-in-out">
                            <div className="overflow-hidden">
                                <div className="mt-0.5 space-y-0.5 pl-9 text-[13px]">
                                    <a data-nav="settings" href="settings.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Store
                                        Profile</a>
                                    <a data-nav="shipping-settings" href="shipping-settings.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Shipping</a>
                                    <a data-nav="payment-settings" href="payment-settings.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Payments</a>
                                    <a data-nav="permission-settings" href="permission-settings.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Permissions</a>
                                    <a data-nav="notifications" href="notifications.html" className="block rounded-base px-2 py-2 text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900">Notifications</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Reports */}
                    <a data-nav="reports" href="reports.html" title="Reports" className="sidebar-link flex items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted">
                        <i data-lucide="bar-chart-3" className="h-[18px] w-[18px] shrink-0 text-ink-500" />
                        <span className="nav-text flex-1">Reports</span>
                    </a>
                    {/* List Page */}
                    <a data-nav="list-page" href="list-page.html" title="List Page" className="sidebar-link flex items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted">
                        <i data-lucide="list" className="h-[18px] w-[18px] shrink-0 text-ink-500" />
                        <span className="nav-text flex-1">List Page</span>
                    </a>
                </nav>
                {/* User profile */}
                <div className="relative border-t border-surface-line p-3">
                    <button type="button" data-menu-toggle="user" aria-controls="sidebar-user-menu" aria-expanded="false" aria-haspopup="menu" className="user-switch flex w-full items-center gap-3 rounded-base px-2 py-2 text-left transition-colors hover:bg-surface-muted">
                        <img src="admin-assets/assets/avatars/admin-avatar.svg" alt="Emay Walter" className="h-9 w-9 shrink-0 rounded-full object-cover" />
                        <span className="user-text min-w-0 flex-1">
                            <span className="block truncate text-[14px] font-semibold text-ink-900">Emay Walter</span>
                            <span className="block truncate text-[12px] text-ink-400"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b8d9dcd5d1d6f8cdd6d1d5d9cacc96d4d7dbd9d4">[email&nbsp;protected]</a></span>
                        </span>
                        <i data-lucide="chevrons-up-down" className="user-text h-4 w-4 shrink-0 text-ink-400" />
                    </button>
                    {/* User dropdown */}
                    <div id="sidebar-user-menu" data-menu="user" className="absolute bottom-full left-3 right-3 z-50 mb-2 hidden rounded-card border border-surface-line bg-surface-card p-1.5 shadow-lift" role="menu">
                        <div className="flex items-center gap-3 border-b border-surface-line px-2 pb-3 pt-2">
                            <img src="admin-assets/assets/avatars/admin-avatar.svg" alt="Emay Walter" className="h-9 w-9 rounded-full object-cover" />
                            <span className="min-w-0 flex-1"><span className="block truncate text-[14px] font-semibold text-ink-900">Emay
                                Walter</span><span className="block truncate text-[12px] text-ink-400"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="3f5e5b5256517f4a5156525e4d4b1153505c5e53">[email&nbsp;protected]</a></span></span>
                        </div>
                        <div className="space-y-0.5 py-1.5">
                            <a data-nav="integrations" href="integrations.html" role="menuitem" className="flex items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted"><i data-lucide="folder" className="h-[18px] w-[18px] text-ink-500" /> Integrations</a>
                            <a data-nav="history" href="history.html" role="menuitem" className="flex items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted"><i data-lucide="history" className="h-[18px] w-[18px] text-ink-500" /> History</a>
                        </div>
                        <div className="border-t border-surface-line py-1.5">
                            <a data-nav="update-app" href="update-app.html" role="menuitem" className="flex items-center gap-3 rounded-base bg-success-50 px-2 py-2 text-[14px] font-semibold text-success-600 transition-colors hover:bg-success-100">
                                <span className="h-2 w-2 rounded-full bg-success-500" /> Update App
                            </a>
                            <a href="signin.html" role="menuitem" className="mt-0.5 flex items-center gap-3 rounded-base px-2 py-2 text-[14px] text-ink-700 transition-colors hover:bg-surface-muted"><i data-lucide="log-out" className="h-[18px] w-[18px] text-ink-500" /> Logout</a>
                        </div>
                        <p className="px-2 pb-1 pt-2 text-[12px] text-ink-400">v1.5.69 • Terms &amp; Conditions</p>
                    </div>
                </div>
            </aside>
    );
}


export default Header;