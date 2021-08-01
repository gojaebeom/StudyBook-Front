package me.studybook.api.config;

import me.studybook.api.interceptor.TokenValidationIC;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new TokenValidationIC())
                .addPathPatterns("/**")
                .excludePathPatterns("/api/users/kakao-login");


    }
}
