import { mapGetters, mapActions } from "vuex";

const Datastore = {
  computed: {
    ...mapGetters(["getToken"]),
    url() {
      return (
        "https://courses.ecampus.oregonstate.edu/services/datastore/public" +
        "/v1/entry?public_key=" +
        process.env.VUE_APP_PUBLIC_KEY
      );
    },
    config() {
      return {
        headers: { Authorization: `Bearer ${this.getToken}` }
      };
    }
  },
  methods: {
    ...mapActions({
      setDatastoreValue: "datastore/setValue",
      mapDatastore: "mapDatastore"
    }),
    readDatastore() {
      if (!this.getToken) {
        console.error("Attempting read without token.");
        return false;
      }

      if (!process.env.VUE_APP_PUBLIC_KEY) {
        console.warn("Attempting reading without public_key.");
      }

      console.log("Attempting Reading...");

      this.axios
        .get(this.url, this.config)
        .then((response) => {
          console.log("READING RESPONSE", response.data.message.entry.value);
          this.setDatastoreValue(response.data.message.entry.value);
          this.mapDatastore(response.data.message.entry.value);
        })
        .catch((error) => {
          console.error("READING ERROR", error);
        })
        .finally(() => {
          console.log("Completing Reading...");
        });
    },
    writeDatastore(data) {
      if (!this.getToken) {
        console.error("Attempting writing without token.");
        return false;
      }

      if (!process.env.VUE_APP_PUBLIC_KEY) {
        console.warn("Attempting writing without public_key.");
        return false;
      }

      console.log("Attempting Writing...");

      const payload = {
        value: JSON.stringify(data)
      };

      this.axios
        .put(this.url, payload, this.config)
        .then((response) => {
          console.log("WRITING RESPONSE", response);
        })
        .catch((error) => {
          console.error("WRITING ERROR", error);
        })
        .finally(() => {
          console.log("Completing Writing...");
        });
    }
  }
};

export default Datastore;
