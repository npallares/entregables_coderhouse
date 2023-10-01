import { chatModel } from "./models/chat.model.js";

export class ChatManagerMongo {
  cosntructor() {
    this.model = chatModel;
  }

  async getchats() {
    try {
      const result = await this.model.find();
      return result;
    } catch (error) {
      console.log("getchats problema", error.message);
      throw new Error(`no se pudieron obtener los chats ${error.message}`);
    }
  }

  async addMessage(message) {
    try {
      const result = await this.model.create(message);
      return result;
    } catch (error) {
      console.log("addMessage problema", error.message);
      throw new Error(`no se pudo crear el mensaje ${error.message}`);
    }
  }
}