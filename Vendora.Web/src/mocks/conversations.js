// MOCK DATA — Replace with real API service
export const conversations = [
    {
        id:'c1', customer:'علی محمدی', channel:'telegram', handle:'@ali_mohammadi',
        updatedAt:'۲ دقیقه پیش', unread:2, aiStatus:'ai', state:'Product Selected',
        filterTags:['ai','order'], intent:'Product Search', confidence:94,
        context:{ product:'Nike Air Max', size:'42', color:'مشکی', budget:'۳٬۰۰۰٬۰۰۰ تومان', order:'ثبت نشده' },
        products:[
            { productId:'p1', name:'Nike Air Max', sku:'NK-AM-001', price:2890000, size:'42', color:'مشکی', status:'instock', mentioned:true },
            { productId:'p2', name:'Adidas Run',   sku:'AD-RN-002', price:2690000, size:'42', color:'سفید', status:'instock', mentioned:true },
        ],
        messages:[
            { from:'customer', text:'سلام، یه کفش برای استفاده روزمره زیر ۳ میلیون می‌خوام.', time:'۱۰:۱۲' },
            { from:'ai',       text:'حتماً 👋 سایزتون چنده؟', time:'۱۰:۱۲' },
            { from:'customer', text:'42', time:'۱۰:۱۳' },
            { from:'ai',       text:'عالی. دو مدل مناسب در محدوده بودجه شما پیدا کردم:\n\nNike Air Max — ۲٬۸۹۰٬۰۰۰ تومان\nAdidas Run — ۲٬۶۹۰٬۰۰۰ تومان\n\nهر دو در سایز ۴۲ موجود هستند.', time:'۱۰:۱۳' },
            { from:'customer', text:'مدل Nike رو می‌خوام.', time:'۱۰:۱۵' },
            { from:'ai',       text:'حتماً. سفارشتون رو ثبت کنم؟', time:'۱۰:۱۵' },
        ],
    },
    {
        id:'c2', customer:'سارا احمدی', channel:'instagram', handle:'@sara_ahmadi',
        updatedAt:'۸ دقیقه پیش', unread:1, aiStatus:'review', state:'Awaiting Payment',
        filterTags:['review','order'], intent:'Order Tracking', confidence:71,
        context:{ product:'Adidas Run', size:'38', color:'سفید', budget:'—', order:'ORD-1023' },
        products:[
            { productId:'p2', name:'Adidas Run', sku:'AD-RN-002', price:2690000, size:'38', color:'سفید', status:'instock', mentioned:true },
        ],
        messages:[
            { from:'customer', text:'سلام، سفارشم کی ارسال میشه؟', time:'۰۹:۵۸' },
            { from:'ai',       text:'سلام سارا جان 👋 سفارش شما با شماره ORD-1023 ثبت شده و در انتظار پرداخت است. بعد از پرداخت، طی ۱ تا ۳ روز کاری ارسال می‌شه.', time:'۰۹:۵۸' },
            { from:'customer', text:'میشه پرداخت رو در محل انجام بدم؟', time:'۱۰:۰۲' },
            { from:'ai',       text:'این مورد نیاز به بررسی توسط تیم پشتیبانی داره. همکاران ما به‌زودی پاسخ می‌دن 🙏', time:'۱۰:۰۲' },
        ],
    },
    {
        id:'c3', customer:'محمد رضایی', channel:'bale', handle:'@mohammad.r',
        updatedAt:'۱۲ دقیقه پیش', unread:0, aiStatus:'ai', state:'Browsing',
        filterTags:['ai'], intent:'Price Inquiry', confidence:88,
        context:{ product:'Nike Revolution', size:'—', color:'—', budget:'۳٬۵۰۰٬۰۰۰ تومان', order:'ثبت نشده' },
        products:[
            { productId:'p3', name:'Nike Revolution', sku:'NK-RV-003', price:3200000, size:'—', color:'مشکی', status:'out', mentioned:true },
            { productId:'p7', name:'Nike Pegasus 40', sku:'NK-PG-007', price:3490000, size:'42', color:'آبی',   status:'instock', mentioned:false },
            { productId:'p5', name:'New Balance 574', sku:'NB-574-005', price:3890000, size:'42', color:'طوسی',  status:'instock', mentioned:false },
        ],
        messages:[
            { from:'customer', text:'قیمت این مدل چنده؟', time:'۰۹:۴۴' },
            { from:'ai',       text:'مدل Nike Revolution الان ۳٬۲۰۰٬۰۰۰ تومانه. متأسفانه فعلاً موجودی این مدل تموم شده، ولی می‌تونم دو مدل جایگزین مشابه معرفی کنم. مایلید؟', time:'۰۹:۴۴' },
            { from:'customer', text:'آره بگو', time:'۰۹:۴۶' },
        ],
    },
    {
        id:'c4', customer:'نگار کریمی', channel:'rubika', handle:'@negar_k',
        updatedAt:'۲۵ دقیقه پیش', unread:0, aiStatus:'ai', state:'Waiting for Confirmation',
        filterTags:['ai','order'], intent:'Product Search', confidence:91,
        context:{ product:'Puma Smash', size:'37', color:'سفید', budget:'۲٬۵۰۰٬۰۰۰ تومان', order:'در انتظار تأیید' },
        products:[
            { productId:'p4', name:'Puma Smash',    sku:'PM-SM-004', price:2390000, size:'37', color:'سفید', status:'instock', mentioned:true },
            { productId:'p8', name:'Puma Velocity', sku:'PM-VL-008', price:2190000, size:'37', color:'مشکی', status:'instock', mentioned:true },
        ],
        messages:[
            { from:'customer', text:'یه کفش سفید سایز ۳۷ زیر دو و نیم میلیون دارید؟', time:'۰۹:۳۰' },
            { from:'ai',       text:'بله 👌 مدل Puma Smash دقیقاً در همین محدوده‌ست:\n\nPuma Smash — ۲٬۳۹۰٬۰۰۰ تومان\nسایز ۳۷ · سفید · موجود', time:'۰۹:۳۰' },
            { from:'customer', text:'خوبه، می‌خرمش', time:'۰۹:۳۲' },
            { from:'ai',       text:'سفارشتون رو ثبت کنم؟ فقط تأیید نهایی رو بزنید تا براتون لینک پرداخت بفرستم.', time:'۰۹:۳۲' },
        ],
    },
    {
        id:'c5', customer:'رضا موسوی', channel:'telegram', handle:'@reza_mousavi',
        updatedAt:'۱ ساعت پیش', unread:0, aiStatus:'ai', state:'Completed',
        filterTags:['ai','order'], intent:'Order Creation', confidence:96,
        context:{ product:'New Balance 574', size:'43', color:'طوسی', budget:'۴٬۰۰۰٬۰۰۰ تومان', order:'ORD-1021' },
        products:[
            { productId:'p5', name:'New Balance 574', sku:'NB-574-005', price:3890000, size:'43', color:'طوسی', status:'instock', mentioned:true },
        ],
        messages:[
            { from:'customer', text:'سلام، New Balance 574 سایز ۴۳ دارید؟', time:'۰۸:۱۰' },
            { from:'ai',       text:'سلام 👋 بله موجوده — ۳٬۸۹۰٬۰۰۰ تومان، رنگ طوسی. ثبت کنم؟', time:'۰۸:۱۰' },
            { from:'customer', text:'بله لطفاً', time:'۰۸:۱۲' },
            { from:'ai',       text:'سفارش شما با شماره ORD-1021 ثبت شد ✅ لینک پرداخت براتون ارسال شد.', time:'۰۸:۱۲' },
        ],
    },
    {
        id:'c6', customer:'مریم شریفی', channel:'telegram', handle:'@maryam_sh',
        updatedAt:'۲ ساعت پیش', unread:0, aiStatus:'ai', state:'Browsing',
        filterTags:['ai'], intent:'Greeting', confidence:82,
        context:{ product:'—', size:'—', color:'—', budget:'—', order:'ثبت نشده' },
        products:[],
        messages:[
            { from:'customer', text:'سلام، تخفیف دارید؟', time:'۰۷:۲۲' },
            { from:'ai',       text:'سلام مریم جان 👋 بله، روی بعضی مدل‌ها تخفیف ویژه داریم. چه دسته‌بندی‌ای مدنظرتونه؟', time:'۰۷:۲۲' },
        ],
    },
];