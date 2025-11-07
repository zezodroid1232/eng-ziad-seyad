import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="زياد سيد عبدالنبي - مهندس ذكاء اصطناعي ومطور برمجيات محترف. Power Programar - شركة برمجة احترافية في جميع المجالات" />
        <meta name="keywords" content="ذكاء اصطناعي, برمجة, تطوير ويب, تطبيقات موبايل, Power Programar, زياد سيد عبدالنبي" />
        <meta name="author" content="Ziad Sayed Abdelnabi" />
        <title>زياد سيد عبدالنبي - Power Programar | مهندس ذكاء اصطناعي</title>
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Font Awesome */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        
        {/* Custom Styles */}
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* React */}
        <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
      </head>
      <body class="bg-gray-900">
        {children}
      </body>
    </html>
  )
})
