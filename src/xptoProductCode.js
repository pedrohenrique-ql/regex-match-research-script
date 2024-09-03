// Regex incompleta para detectar códigos de produtos do tipo XPTO
const XPTO_PRODUCT_CODE_REGEX = /^[PQR]-[02468]\d{2}-[A-Z]{3}-XPTO$/gm;

function testProductCode(code) {
  return XPTO_PRODUCT_CODE_REGEX.test(code);
}
