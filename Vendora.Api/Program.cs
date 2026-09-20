using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// React files
var viteRoot = Path.Combine(app.Environment.WebRootPath!, "Vite");

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(viteRoot),
    RequestPath = ""
});

// سایر فایل‌های wwwroot مثل images/uploads
app.UseStaticFiles();

app.MapGet("/api/test", () => new
{
    message = "Hello yohoooooooooooooooo"
});

// React SPA entry
app.MapFallbackToFile("Vite/index.html");

app.Run();