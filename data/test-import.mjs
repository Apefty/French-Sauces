#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';

async function main(){
  try{
    const saucesDir = new URL('./sauces/', import.meta.url);
    const files = await fs.readdir(saucesDir);
    let failures = 0;
    for(const f of files){
      if(!f.endsWith('.js')) continue;
      const fileUrl = new URL('./sauces/' + f, import.meta.url).href;
      try{
        const mod = await import(fileUrl);
        const data = mod.default || mod;
        if(!data || typeof data !== 'object'){
          console.error('INVALID EXPORT (not object):', f);
          failures++;
          continue;
        }
        const keys = Object.keys(data);
        if(keys.length !== 1){
          console.warn('WARN: expected single key, got', keys.length, 'in', f, '-', keys);
        }
        console.log('OK', f, '->', keys[0] || '(no-key)');
      }catch(err){
        console.error('ERROR importing', f, err && err.message ? err.message : err);
        failures++;
      }
    }
    if(failures){
      console.error(String(failures) + ' module import failures');
      process.exit(2);
    }
    console.log('All modules imported OK');
  }catch(e){
    console.error('Test runner failed:', e && e.message ? e.message : e);
    process.exit(3);
  }
}

main();
