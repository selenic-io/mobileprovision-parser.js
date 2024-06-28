import { entitlements } from "entitlements-parser"

export class mobileprovision {
    constructor(
        mobileProvisionObject
    ) {
        this.AppIDName = mobileProvisionObject.AppIDName || "Undefined"
        this.ApplicationIdentifierPrefix = mobileProvisionObject.ApplicationIdentifierPrefix || "Undefined"
        this.CreationDate = mobileProvisionObject.CreationDate || "Undefined"
        this.Platform = mobileProvisionObject.Platform || "Undefined"
        this.IsXcodeManaged = mobileProvisionObject.IsXcodeManaged || "Undefined"
        this.DeveloperCertificates = mobileProvisionObject.DeveloperCertificates || "Undefined"
        this.DER_Encoded_Profile = mobileProvisionObject["DER-Encoded-Profile"] || "Undefined"
        this.PPQCheck = mobileProvisionObject.PPQCheck || "Undefined"
        this.ExpirationDate = mobileProvisionObject.ExpirationDate || "Undefined"
        this.Name = mobileProvisionObject.Name || "Undefined"
        this.ProvisionedDevices = mobileProvisionObject.ProvisionedDevices || "Undefined"
        this.TeamIdentifier = mobileProvisionObject.TeamIdentifier || "Undefined"
        this.TeamName = mobileProvisionObject.TeamName || "Undefined"
        this.TimeToLive = mobileProvisionObject.TimeToLive || "Undefined"
        this.UUID = mobileProvisionObject.UUID || "Undefined"
        this.Version = mobileProvisionObject.Version || "Undefined"
        this.Entitlements = new entitlements(mobileProvisionObject.Entitlements)
    }
}