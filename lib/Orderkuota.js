const axios = require("axios");

class OrderKuota {
    constructor() {
        this.apikey = "hafiza"; // API Key sesuai dengan parameter API baru
        this.merchantId = global.merchantId;
        this.apiToken = global.apiToken;
        this.codeqr = global.codeqr;
    }

    /**
     * Fungsi untuk membuat pembayaran menggunakan API baru.
     * @param {number} amount - Jumlah nominal yang ingin dibayarkan.
     * @returns {Object} - Data hasil pembayaran.
     */
    async createPayment(amount) {
        try {
            const url = `https://hafiza.apixd.my.id/api/orkut/createpayment?apikey=${this.apikey}&amount=${amount}&codeqr=${this.codeqr}`;
            const response = await axios.get(url);

            if (!response.data.status) {
                throw new Error("Gagal membuat pembayaran: " + response.data.message);
            }

            return response.data.result;
        } catch (error) {
            throw new Error("Terjadi kesalahan saat membuat pembayaran: " + error.message);
        }
    }

    /**
     * Fungsi untuk mengecek status pembayaran menggunakan API baru.
     * @returns {Object} - Data status pembayaran.
     */
    async cekStatus() {
        try {
            const url = `https://hafiza.apixd.my.id/api/orkut/cekstatus?apikey=${this.apikey}&merchant=${this.merchantId}&keyorkut=${this.apiToken}`;
            const response = await axios.get(url);

            if (!response.data.status) {
                throw new Error("Gagal mengecek status: " + response.data.message);
            }

            return response.data;
        } catch (error) {
            throw new Error("Terjadi kesalahan saat mengecek status: " + error.message);
        }
    }
}

module.exports = { OrderKuota };