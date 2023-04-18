// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::{ Size, PhysicalSize};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}


// Create the command:
// This command must be async so that it doesn't run on the main thread.
#[tauri::command]
 fn staff_window(window: tauri::Window) {
    window.center().unwrap();
    
  window.set_size(Size::Physical(PhysicalSize { width: 1450, height: 850 })).unwrap();
  window.center().unwrap();
}

#[tauri::command]
 fn admin_window(window: tauri::Window) {
  
  window.set_size(Size::Physical(PhysicalSize { width: 1490, height: 850 })).unwrap();
  window.center().unwrap();
}

#[tauri::command]
 fn titlebar_minimize(window: tauri::Window) {
  
 window.minimize().unwrap();
}

#[tauri::command]
 fn titlebar_close(window: tauri::Window) {
    window.close().unwrap();
}

#[tauri::command]
 fn login_resize(window: tauri::Window) {
    window.set_size(Size::Physical(PhysicalSize { width: 450, height: 700 })).unwrap();
    window.center().unwrap();
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet,staff_window,admin_window,titlebar_minimize,login_resize,titlebar_close])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}





