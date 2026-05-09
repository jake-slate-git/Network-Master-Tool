// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod connection;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn connect_ssh(host: String, user: String) -> Result<String, String> {
    // Placeholder for SSH connection logic
    println!("Connecting to {} as {}", host, user);
    Ok(format!("Connected to {}", host))
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, connect_ssh])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
