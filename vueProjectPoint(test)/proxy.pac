function FindProxyForURL(url, host)
{
    if (isInNet(host, "192.168.1.0", "255.255.255.0"))
        return "DIRECT";
    return "192.168.1.1:1080";
}