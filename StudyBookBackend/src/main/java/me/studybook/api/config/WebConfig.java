package me.studybook.api.config;

import me.studybook.api.interceptor.TokenValidation;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new TokenValidation())
                .addPathPatterns("/**")
                .excludePathPatterns("/api/users/kakao-login");
    }
}
