package ca.bc.gov.splunknotificationservice.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "splunk")
public class SplunkProperites {
    private String teamsUrl;
    private String rocketUrl;
    private String token;

    public String getTeamsUrl() { return teamsUrl; }

    public void setTeamsUrl(String teamsUrl) { this.teamsUrl = teamsUrl; }

    public String getRocketUrl() { return rocketUrl; }

    public void setRocketUrl(String rocketUrl) { this.rocketUrl = rocketUrl; }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
