import axios from 'axios'


export const arrayBufferToBase64 = (buffer) => {
    const binary = []
    const bytes = new Uint8Array(buffer)
    for (let i = 0; i < bytes.byteLength; i++) {
      binary.push(String.fromCharCode(bytes[i]))
    }
    return btoa(binary.join(''))
  }
  
  // Base64转ArrayBuffer
  export const base64ToArrayBuffer = (base64) => {
    const binaryString = atob(base64)
    const bytes = new Uint8Array(binaryString.length)
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i)
    }
    return bytes.buffer
  }
  
  
  export const download_pdf_from_s3 = async (url) => {
    // Add authentication headers if needed
    const headers = {
      Accept: 'application/octet-stream'
    };
    
    const res = await axios.get(url, { 
      responseType: 'arraybuffer',
      headers: headers,
      // Add withCredentials if your API requires cookies for authentication
      withCredentials: true
    })
    return res.data
  }
  
  
  export const decryptFile = async (ciphertextBase64, keyBase64, ivBase64) => {
    // 将密钥和IV转换为WordArray格式
    const keyWordArray = CryptoJS.enc.Base64.parse(keyBase64)
    const ivWordArray = CryptoJS.enc.Base64.parse(ivBase64)
    
    // 解密
    const decrypted = CryptoJS.AES.decrypt(
      ciphertextBase64,
      keyWordArray,
      {
        iv: ivWordArray,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
      }
    )
    
    // 转换为ArrayBuffer
    const decryptedStr = decrypted.toString(CryptoJS.enc.Base64)
    return new Uint8Array(base64ToArrayBuffer(decryptedStr))
  }


  export function calc_iou(pocket_a, pocket_b) {
    // pocket_a [x, y, z, l1, l2, l3]
    // pocket_b [x, y, z, l1, l2, l3]
    const x1 = Number(pocket_a.x)
    const y1 = Number(pocket_a.y)
    const z1 = Number(pocket_a.z)
    const l1 = Number(pocket_a.l1)
    const l2 = Number(pocket_a.l2)
    const l3 = Number(pocket_a.l3)
    const x2 = Number(pocket_b.x)
    const y2 = Number(pocket_b.y)
    const z2 = Number(pocket_b.z)
    const l4 = Number(pocket_b.l1)
    const l5 = Number(pocket_b.l2)
    const l6 = Number(pocket_b.l3)
    const x_min = Math.min(x1 - l1 / 2, x2 - l4 / 2)
    const x_max = Math.max(x1 + l1 / 2, x2 + l4 / 2)
    const y_min = Math.min(y1 - l2 / 2, y2 - l5 / 2)
    const y_max = Math.max(y1 + l2 / 2, y2 + l5 / 2)
    const z_min = Math.min(z1 - l3 / 2, z2 - l6 / 2)
    const z_max = Math.max(z1 + l3 / 2, z2 + l6 / 2)
    const x = x_max - x_min
    const y = y_max - y_min
    const z = z_max - z_min
    const v1 = l1 * l2 * l3
    const v2 = l4 * l5 * l6
    const v3 = x * y * z
    const v4 = Math.max(0, v1 + v2 - v3)
    const iou = v4 / (v1 + v2 - v4)
    return iou
  }
  
  export function change_pocket_to_xyz(coords_info, expand = 10) {
    return {
      x: (coords_info.max_x + coords_info.min_x) / 2,
      y: (coords_info.max_y + coords_info.min_y) / 2,
      z: (coords_info.max_z + coords_info.min_z) / 2,
      l1: coords_info.max_x - coords_info.min_x + expand,
      l2: coords_info.max_y - coords_info.min_y + expand,
      l3: coords_info.max_z - coords_info.min_z + expand
    }
  }
  