# Zabbix Template CUCM Resources Monitoring

[Template for import](zabbix-template-cucm.xml)

## CUCM Settings

- Access Control Group: Standard AXL Read Only API Access
- Role Assignment:
- Application User: Monitoring
- Password: Password
- Groups:
- Standard AXL Read Only API Access
- Standard CCM Server Monitoring

## Template

This template monitors the resources of each node of the CUCM cluster through AXL:

- Calls Active
- Annunciator Out Of Resources
- HW Conference Out Of Resources
- Location Out Of Resources
- MOH Out Of Resources
- MTP Out Of Resources
- MTP Resources Active
- SW Conference Out Of Resources
- Transcoder Out Of Resources
- Transcoder Resources Active
- Video Out Of Resources

## Create a user and give him the appropriate permissions in CUCM

- Create an Access Control Group and assign the roles below.

![alt text](img/zabbix-template-cucm-01.png)

- Create an Application User for Zabbix and add him to created group. Add him to "Standard CCM Server Monitoring" group too.

![alt text](img/zabbix-template-cucm-02.png)

## Configure CUCM node on Zabbix

- Add CUCM node IP address on "Agent interfaces"
- Add macro `{$ZABBIX_APIUSER_UC}` - value: Username of Zabbix in CUCM.
- Add macro `{$ZABBIX_APIPASS_UC}` - value: Password of the Zabbix user in CUCM.
- Attach "Cisco AXL Resources Monitoring" template to the host.

`zbx_CUCM_Resources_Monitoring_template.xml`
