// MOCK DATA — Replace with real API service
export const orders = [
    {
        id:'ORD-1024', customer:'علی محمدی', date:'۱۴۰۵/۰۵/۱۲', payment:'paid', status:'completed',
        channel:'telegram',
        items:[
            { productId:'p1', name:'Nike Air Max', sku:'NK-AM-001', size:'42', color:'مشکی', qty:1, price:2890000 },
            { productId:'p4', name:'Puma Smash',   sku:'PM-SM-004', size:'37', color:'سفید', qty:2, price:2390000 },
        ],
        shipping:0, discount:0,
        timeline:['Order Created','Payment Received','Order Confirmed','Processing','Completed'],
    },
    {
        id:'ORD-1023', customer:'سارا احمدی', date:'۱۴۰۵/۰۵/۱۲', payment:'pending', status:'awaiting',
        channel:'instagram',
        items:[
            { productId:'p2', name:'Adidas Run', sku:'AD-RN-002', size:'38', color:'سفید', qty:1, price:2690000 },
        ],
        shipping:0, discount:0,
        timeline:['Order Created'],
    },
    {
        id:'ORD-1022', customer:'محمد رضایی', date:'۱۴۰۵/۰۵/۱۱', payment:'paid', status:'processing',
        channel:'bale',
        items:[
            { productId:'p3', name:'Nike Revolution', sku:'NK-RV-003', size:'43', color:'مشکی', qty:1, price:3200000 },
            { productId:'p7', name:'Nike Pegasus 40', sku:'NK-PG-007', size:'42', color:'آبی',  qty:1, price:3490000 },
        ],
        shipping:0, discount:100000,
        timeline:['Order Created','Payment Received','Order Confirmed'],
    },
    {
        id:'ORD-1021', customer:'رضا موسوی', date:'۱۴۰۵/۰۵/۱۰', payment:'paid', status:'completed',
        channel:'telegram',
        items:[
            { productId:'p5', name:'New Balance 574', sku:'NB-574-005', size:'43', color:'طوسی', qty:1, price:3890000 },
        ],
        shipping:0, discount:0,
        timeline:['Order Created','Payment Received','Order Confirmed','Processing','Completed'],
    },
    {
        id:'ORD-1020', customer:'نگار کریمی', date:'۱۴۰۵/۰۵/۰۹', payment:'paid', status:'completed',
        channel:'rubika',
        items:[
            { productId:'p8', name:'Puma Velocity', sku:'PM-VL-008', size:'38', color:'مشکی', qty:1, price:2190000 },
            { productId:'p4', name:'Puma Smash',    sku:'PM-SM-004', size:'37', color:'سفید', qty:1, price:2390000 },
        ],
        shipping:0, discount:0,
        timeline:['Order Created','Payment Received','Order Confirmed','Processing','Completed'],
    },
];

// ---- Helpers ----
export const orderSubtotal = (o) =>
    (o.items || []).reduce((s, it) => s + it.qty * it.price, 0);

export const orderTotal = (o) =>
    orderSubtotal(o) - (o.discount || 0) + (o.shipping || 0);

export const orderItemCount = (o) =>
    (o.items || []).reduce((s, it) => s + it.qty, 0);