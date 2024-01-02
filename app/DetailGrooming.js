import {
  Heading,
  Text,
  Center,
  Image,
  Box,
  VStack,
  ScrollView,
  FlatList,
  HStack,
  Button,
  ButtonText,
  ButtonIcon,
  AddIcon,
} from "@gluestack-ui/themed";
import { Header } from "../components";
import React from "react";
import { Link } from "expo-router";

const Reservation = () => {
  return (
    <>
      <Header title={"Detail Grooming"} />
      <ScrollView>
        <Heading lineHeight={"$5xl"} mb={"$7"} color="$black" ml={"$5"}>
          Our Services
        </Heading>
        <Center>
          <Box
            maxWidth="$70"
            borderColor="$borderLight200"
            
            borderWidth="$1"
            my="$4"
            overflow="hidden"
            sx={{
              "@base": {
                mx: "$5",
              },
              _dark: {
                bg: "$backgroundDark900",
                borderColor: "$borderDark800",
              },
            }}
          >
            <Box>
              <Image
                
                h={150}
                width="100%"
                source={{
                  uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRYYGBgYGRoaGhgZGBgYGBgZGBgZGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJSs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EAEAQAAIBAgQEBAQFAgQDCQEAAAECAAMRBBIhMQVBUWEGInGBEzKRoUKxwdHwUuEUI3KCM2LxFRYkQ1Nzg5KyB//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACQRAAICAgICAwEBAQEAAAAAAAABAhEhMQMSBEETIlFhMpEU/9oADAMBAAIRAxEAPwD5jwLAirVVTtN/S4Th6AYsovboJifCj5cSl+d5rvFgJynkROjij9bI8j+1F/hJ6GV2sLlm6ddPtHfC+HIyEADWYvwyoGYd5v8Ag+lI27y/RdEzjj5DfO+P0gWj4Nw3zFEJv0EW1MAtN3RB5Re1thLhjamdhm22hWENwSdSZThfx8vX9Q/k8PzeM53pg+BXcRpTSLcEbsY2prPL549eSS/p6PjPtxRf8Lcmk8dNIQF0ldRTbaRLWls9w1QKIdgMUAfWBYYLl809r1lpqW5nYTpi+qTOZ3NtIj4n4rpkTc/bvMcwh+OcsSTuYAZGUu0jojHrGiFSeJPas6nHEYVSEk08pSTRZDRB6kHcQmpKCJD2X9EQJOkfMJEzqR8wlUSZHGfN7SutQujHtCcQnmEniwBTb0mr7Gv6g9FfKPQS9RaD0K6WUZ1vYaXELURhWX8pFlnU25SbCOibBnWL8UsaOIBiV0MIBM6yplhVQShhGQjByJU67whxK3G8YACwnSzLOimKuCa1UO1mH7frN14nS9JSOU+c4eoVsRuCD9JvU4xTq0QDa+lweUpGajF2LKDlJUB8EQKx7zd8DYZGHczGYbF0ka/ljGh4mppexGsdeVH4+pzPwpryPkTxQRi1IqkDYgyFB2sVAO8BqeJad73F5UPFFMG9xB/6o/JGVaOz4L8efE3t/wDB/gUIOojmiJmeD8ZWs3l62mnw85efkU5uS9lfH4vi4lG9B+Hp3IENxNNVXWKa2NyagQb/AB71Wy7Dn6SSfr2UlBSyySWLFjoq394nxWK+I9/wjb94RxfFj/hpsN/2iyjvGlLCiDi4lFNl2JGkAMNxB0gRi+yj0V1Z7TjvgnBUrXetV+Eg22zOeig9PQxe+JwKO6M9dStwrZVKluVxvaWUXRByV0RpmTYysW5MGHIjYiekxJIeLIPKWlrSppNLJVvBEmdQ+cesixkqHzD1jeyfoOrUtQYq8R4hkp+W2txr6R5V5RB4ppFqVxyMb2Lf1POGYNDSXMoNxfUfrLXpPS8yXZPxIdSB1Q/pL+HJamn+kQoTezeirD1A1nU3B2hjRPhhkqMn4T517f1CNQ9xGQjIPAa0LcwOrCYWVRB2EKr7wZoyFZQ41kH2k+cjX2jCAeadK7TyANAAfpLFvbS/tJUuEYnlQrH/AON/2m18MeHMil6yHMRopU+UfvFckkUjBtmE1nWmg8R8DaixdR5D9v7RCCOok07GcWmeAT20mqE8jJfBboZuyCos0Xgp7Ow7ifTMM0+V+FrrVIIOoE+o4VGNrKduhk3spFYPMSpY2tK8XWFFMotnb+Xjengn3y68rxRiuA4h2LnKe19u0Z4VrZkredCRddTLKQ1jnDeGazGzZVHUm/0Ef4Hw7SS2YZz1bb6RVFseUkjHHDu+iKWPYS7D+HcQ5tky92IE+hVQiLewAHQftF4YODlYr6aRmqFWUfOgr0MaaVRgQoGU38oBFza+2t4g8S4+ga10cMCNWW5UHmL7R5464BiQfim1RGdQSoNwp084/pva8Pw/gakyKKmdnJyk5ioDWvZQNANrdp0xk3GjknFRlYh4Q4IbKbrcEW1GojAmLuG8IfDNVpudqht6AaH3hxMjLZWGj0yp5ZKahi0O2RMtw+4lKy+juIaMMGO0B4qtwo6sBCwYJxE60/8AX+kPsX0DYZzTb4T7ammTsQfw+oh0licOrjKwuPuD1EDOGqqLK4I5Bhcj3mAQrL/mIezXho0EuqIWtUKBbgKcvy3G5EHYxhSDvBahlrtBnMBgSvBWMIrmDNGQGQprdjIYqX0xuYPiGuYyYjAbTp7adME+zrXHWXriVmC/7WPeerxZu85HI7VA29eoh3Cn1AMEelQO9ND/ALRMwnEmPWEpxE9IrkOooejAYb/0E/8AqJdTwmGH/koP9oiVOK9ZaOKrzi9g9TQUq9FNVRB6KJz8ZPITPniySA4iOQm7sKghweJVWOl4dh8Y9rDeZxMY52l6YpxqdLd4OzsZwwbPC5rXY3PblLzWA3IHvM5wrHO2mYEdAdY6pANqACeh0M6Iu0cso08ksdxCmqm7C52maXGVFbMnnXmBv7R1xDhC1tflYc9x7DnL+H8PSkpVVLX1JPM8vQdokuzkUjKMY/0U1OLKVIcFdNVYFfzjnDOHVHA+dFYdmUafb8pc9IneSpeXYx4zcXklyJTRh/GOEKYgvlIV1U3sbZrWIv10mfafXHqI4yVFDA8mAI+8VcV8J0KtjTtSYb5VGUjutxY9/wA5T/WUST64Z84vKKhjrG8Gq0gS6EKCy5s6AGwuCN9NL94keBqhrs9SWIdZWkmh1EBg7pA+I/NT/wBf6Qy+0D4nvT/9wflC9gWg+88ci08JnjmAzKQWLqoJIN/LfS/I26yFTQkHlI1sUaYLqbFdRB6eLNQZz+LX6xhWSdoK5lztB3MwSisYKTCKpgNZrQoVl7HyepgtQyx28okHXS/8EZAYOwnT206YxpWrJ0kfjryETLXhFGsvMzj6tnd2SGi1CZckGw9dNswjGmgO2s3VmUkwZucjGlHhTudBa/MmM8L4ULavUt2UfqYFBsPZGYEkHPKbzD+F8Ou6lz1Y3+0A4v4aBGan5T0G0b42D5F6Muhf+oiSZyNzeePQdDZ1I/L6yqo0KigPkYfgsUUOYTf+HKz1VzOtgLWPM/2nz/htEuyoNWYgD+GfScAxUCmNMunYnqIywTk3JDMAf2nuYDfSQqFstwDoeYtoBv8AeLOK4/IhK/MBp09IzdE0my/E4wDfynpuftFrYtr9RFnBsU9Yk1DcDYWsNhe9m63/AL7xw1NLaH2vJSTeSsaWAqi4Yaz0i/l+kGRwBcGUvjBtf+fpGhKtiTheg81QSEYKylgGDjfTysp2vcDQ77g30OD4zwmt8StU+AQgdjdbABdwy9RaxNh12mybFDUlQxA1N99vuLSVLjKAAvcK2gc/KGJ+Vunrt6TotPDJU1lI+X01uRc2GlzvYX3tzluJpqjsqOHUHRwCAw62O0ceLeGijVDJ8lS79g1/MAemoPvEKjWK1WAp3kPvtA+Jn5P9YhCXPtAONVbKliL51OvrM9mvA0ldQwNsU6auAV6jlKeJ44BfLqSNO94Eg2L+I4g1HFJDp+L0jBQFAA5CA8LwWQF2+dtfSFM0IDx2lLmeu0qdpgHlU3EWVm1hztBHGs1mPdxaeXJ0nLPRDZqKsvf850nYfwzpuxqBKJ0lwg1A6wkQx0V8pVyMsRrR5wrH2IBiESykCSAu52mcVIjDkcT6dw/FKbax7QxAnzCtWaiq+bzcx+cYYHxH/VJv6umdCakrR9KSreXrrMZhOPp/VG+G4wp5ibsgOLG9bAo4sygxJjfClNtV8vp+0YrxIcjKa/iBEJRr5tLAC5N5qTA+yFXD/DjU6qMX2a+2t7EA/eaDhuEalcu5c5iQTzub7dOUHqYuzAt85tptbsYaXFrsQSe35RJP8Cl+hpxd/m56ADQDrfnMX4moNXfJnKoSNVIFwDY6/ePK2JH1/tAMTiVza2Nvt1/L7STljJSMa0I8B4ZpIpYvV8wFwK1Rdx/ysNb9hC0w6J5w9U2FwGqOwP8AL85HiGJKiyXse5HPa/TtAaeMZ9DY23IsduekDlbGjGkMk4hVub2YdbWK/TQyXxL2Y6em07BuBv8At+c5SLkcjqJkF0M8NiwQz6HLYupHmAuRfuILieMfCNwiujsWsVy2FhaxGgNy38MVY/FvRqK6G11sw5MpJuCOk84vVR8Mxp5gcxKqDfyFh5e+lx7Svd6TJ9FtocHiuGxFNaWIQ2L3R18qoubybEEWBym3IRf4u4E1NlfD07IFs1rkFr6X6Hv3EV0atFsGWYn4oLZbA3BX5QeWU/rHfAeP4lkWg1EuShZHPluo2zA6EbC/pOjjl2Ss5px6ydGSfHhQM6ZT1H6xHxWolSrTzOES9s5BIVhqNuv39o9xmIzOTYKCxNiLhbna0ScYqKwQZBmV76aAj9De0MqQFbGdHiBIyhM2lr8ul9YFg6FnYPqRqo5AHlNNTpo1w4dHIBu3zA20JH4gYsThxbEIGdUDAjMdj2gaZk0U1HlDtLcWmR2S4OUkXGoNukFdooxFmlZnMZGYxFhKWGsPLrktbWB1BFNRUFIk1P8APWe5TlJ5XkOcYxVadJ5Z7MAWUD5oWsBpHzCGiGOi/l/6TGHCsEar5B0uY7ThyULuxvbaL+C1chFtzG2NfMLNrzlVo46M5iMSHcsx9r7DpIrUSA4k+dul56hnO3k6FobJikEsp4pgfKxixTCKJmww21ofYLiNUsoU3JIAB2uTzmsfGYakxcBqlWwvUHyLp+C//wCpgVxSpZ3+UEXIAJEs4v4oyIFVb5wdxt6SkIx6tsnKcm0jZ8P4lTqNZmN7306+s0jHS19PS4+s+GpxJr5bEMdrHmdvWfSuC45koIr3LWA11PvJzjFqx4SldD2oyqbaZed9e2/uYqx4ys225NwQQQTfl7y9MSrb6frB8WqgKetx9Py0InK1aOpOmSwiJVWx+g3B/T+0HxODSkbrax7agyg4wA5dbCTxlW9Mdhz9h9tJkrRm6Z6mOHaWDEXK29pnRUI0jHC1SLHpr+n6wrZnoN4ljSmXyI9tw4voOXbeKl4iFpKoIzX8vUHn6jUQ/iILEkDle3tv6TG8WVhZtrFtvbWM7sVaG2DxY+C1wBdh3GawudeROtu83XA8TW+OabIoFOiwFtcoJQqLg6jSw9pivDWESunwGLK7rnpkC40uXDD/AE/lNH4GeooZ2F7Eoc1/w6Gx30/SU4m4tfjJcqUk/wBRm6+Jp1GqM4yNlZkAubuWBKm/q0jifDrvSSur5hYtlyktYbAgX5X16i0M41hVZ1SwFarWc3Q3QISRYjSxvY7agn0jrwvwevReuj/KU8ja5Wvm1W+3QidFWznukYxMXdGzMxdRambk2Gvl9L8u8lhuJMWUutwv1gDc9dQduvpPA0n2aH6o0iUKVa+U5W/nKBVeGVFYC176A309+kVpUsQeh62+8bJxls9lF0J0DnUf7oVKL2Bxa0LalMqxBFiNxJJSuCdNI1th6t9cj/mfyMDxOBdNbXHUbQNfhk/0DIg9Qay5jKH3ioozxBoZyiedZ6u3rCIyN50hOmMKk3HrD6a3IHUxaxjrglIubj8I1jQOjy1pjnBUgGEO4hohboJDCUrb7yvj1Qike+ks8ROJZZj3NzeWrKKkvpzmZdFyy+kYOpl1OZBZouACmzFKgulRTTNwCPMN7W5Gxmc49wp0qmmyhbGygaqOmXsRbT0jvhzkMEW17G5vbZSSAet4wxtRKwXMSHQhQ1r5wBptzvf2lYvFE2s2Z3huAAcMQAABbQZjlt62J+00mFq3OZmt+Z00Hb1ivEYdPiKisyOSWKkFttdT0tKnxWRgouxtbRTY6EdOsTkTZTji1s1i4o6KBYXued9N7ydbFAryPbnbr32Gsx1XjxS2YEMVuBY7fwH7SoceLjKvlNiLkjW45feRUGUc0jStUDfKN+d+ULqL5LE3v/P1mG4TTqtUVnZrKddd7duU1WOrMQo769d9IrSjgZNyyUORcS2hXG59ouZiHI+kuVhy9Ig2R7QxRCanUahuY7dxFeIqs6lGCspOptqBqDtK6dBmNgx9LzRcOwypYlMwA1vre/8A0MaLbA0kjOf45kqOq5ENSyBspBQm3nTKRYi959D4OgVFVtTuT1YjUzPYjg1MVBVycgUB1srbaeh3jOjirNaUi2tiSSegPxZwply4ilo9Ngw5/LrqIt4x/wD0O9DLTp5XIsxJ8qk7les1dauHUjtPmKV6dB66VkLo4ZfLbMupylSdt/sJWMqwiEo+2KmPOeXjDEYem/wzQBBZQrITc5+ZBPIyjE8OqpfOjDLvpppA0wpogmUqSTYjYSVZQE1bzgjy2BUoRcMGG8EqIwFyCB1tpKlNzqbRRwgPDsFxGopspzD+k66DeKVed8Qg6TJtAaTNB8ehV3/y36/hMGxvDXTzWzL/AFLqIpzwjDcRqU/kY26HUfSNaexKa0QB5z3MdPtGq4vD1v8AiL8N/wCtPlJ7iUYrhDqMykOn9aa29RyjdX6B2XsX5zOk/gr1nQUaxAxn0Hwpw7JhQ5AzVDm9uUweHw5d1QfiYD2J1P0n058UqoqJsqgfSPxL2V8pt0iHwT1iPxU9gi+pjOljTm3677TN+Ia2aoB0H5xpywc8Y5FFWWUjIPtOpGRKoJWXIZQplqQDDXhRBqKC+QNdS3JQwIJPbWbvBcKw1HW5duTtpbl5VGgPfWYDhykuthc3vb0BNz2j2nxMsgQNdkJVSbjOlzlOu2lhaUi0Px9XKmaLhfDEY1K7AEsSoJ2CrqfqfymM8V8Sw6ZloMrMTlOXUr1P85x7jOIf+ESmjWzllYg6gkk629RMpiPDKr8jq4uL62P399I0vwfkl1x+mfVgR3BuDfXpvGPDOHFnVk0Oh7b6Cx9IcOGWUB8q9hYn0032jLBoFAA0kZNvBKNLLGVXhBpoX/Fms9vw9CDzuLG8EplgGSpobizm3XQX73mswrq1ME/0hTe+639tiPtM9WVGqsjfI119OhERpDIrq4JTbLf5Vvf+r8Vu0HqYQrDuGtYKjXJ9Pw6639hp37S2vUVvKCN/YRJQxY8Z5oWoxHWazAcOqLQWsHve5C3PK55ehibAUUKktbynMW7AWt6S/GcY0yIxGVhYg6d/1jQio5YJScsIMw/EVdbkW2Fr325CG4+rRbKyEByBdRy63HI3mdwFG7BAQM7C19gTzkMIpzMes1ugUrHQdx8tyb7e0xPianfM+19x0N5rKGKZGBvYrz9ucQ+J64em7sAC1ybbXO9hDF0CSsQUKlgpBsRYgx3hvFbojI6LUBB1O+o59Ymr8Gel8B3GdHykWNg2oJQ9CQZPxFgPg1ioQojAMgJvpYAi/rf6yuVlEfq8M0lHilCphGVk8yrY6THYrDlQrWsGH8MJ4XhK7BnpjyjfoSNcss47xkV1RcgQpueszfaNsyVPApvPM8hedEHsszTr3lc8DQpCsvDS3D456ZzI5U9Bt7jnBQ88ZoywKxz/AN4/6sPSY82yb950SWE6N2f6L1Q08KYPPVL20RfuZpKqWa2sJ8DcNy4fOw1c39uX6S/HYYgnTT/r/eVjGojck+02xYmHBZR1Nt9pluJuDVe2wYgeg0m0p2RixGYBTcDrY7E9DbX1mBd7knqSfrE5MAgeNI0zOJnUhJDhKGEIJTSSHqqjnAMXcPZlcMpylbnNYNaw6HQ/3nI0swTJnXM1gbgnpcEX9NZW2QEgG4BIBta4B0NuUPoDLqLljlHc2vzAv9bCXrWXTQm1rg9dQdvaDU2W439t/aXUqiX818t9bb2jAbKi38MIobjWK8ZUu5yk5b6X3tyvC+F6uATFYUa3Bocp10sPLrqT0H85RatHOc3NSftG6WsBAK6qj6fK/mB/OL1tDdqYpxGPdSU3B0OmvseUhSxJtkJ25+vWMTkd8ovoNNOZ2gmG4czFrjU84jsfB2e6sMxN7dpQAutm1XLpz11MvbCsjW3zW8x5W5SGLwpAZiwGgsoXfrrAwhKYss9zpfUcgPSNsM2TMRbVStj0MRYbGXphCouNm52uTb7wpMUQJrNQYaysyq91BNmI5aRJ4mqCjlPzor6/8wjLDMXcAC5Owi/xRhi1NkIsy8u4jRfsSSxQs4nxR6gRTdECq9NdDYEaEEcrZvpK8emIqImIqNnQH4e4uvMX9bfaV+FXoMxTE3Ply0z5vm1CqbbDXeNOI8JdHSlV8lk2B8rEEjNl2B/eVpu2StKkKsHxSpSR0RrK+4t94AxvqZN1sSOhkXQjUg67ab+kTIxCess8KmeBoTHl5wnl52aFCs4SLmdeQaMYszzpVp1nswD7lg8MEREGyqB22gOPpgaxqsA4nopM6jnTMrxusVpOwNiVK2HQ8vSYTMJqvFGI/wAsL1Yfv+kyM5+R/YvHRMvKQ5BkiZU51kxgpHPWXqxglNoShmYyDsFlzrnJC31I3A6y+rlztkvkzNlvvluct/a0HwlQK6sRcAgkdRzEMx1RGctTXKhC2XoQoDb9WDH3m9AeyCy+ioN7m2koUyW5sL67Dn6TGYJU3heAq5WBgVYEEgixHKSpvNQLN5hXtY33kuLZXp6DzDW4ifg9UuuvKO0Kge20CbWhqTFfCqhN7KC3U72F4di3IyhdGtcxPWdkqZ106enMRje4D3uzc+3QQNBi7wU067k5WN/Ube8qxtK999QNBtDcMqs1nG31IgGIW2fzkWPlWxJYcte0VrAyasCoLbS2u09BINrHe3v0nNUykW3FjfoRCsBVzVFZ3CnMWzEC2bUi46RIpPA7kdhsQyMrrupvr9wZDiWNNRmYj5je3SQd2dma1ySWNh1NzYdIIaoBBIuL6jqOcf1Qj3ZmcWfObaWO4hmJ4jVqkNUcuQLXNtvaOWxOFTCvTcf5rFiDbU31U3+3tM1TqbX6SjVJUya2wv4DZM5HlLZc3LNa9vpD8bxHPSSkVAyG97dj+8Dwzs9qYJKlgcve1rjva8beIaeHUIaDA3HmH7zK6dAdWrEj678haVMkuKtlzW0va/eVM8ASoiRMkxkCYQHhM8LTmMiZjHWns74TdJ0NAPttHHAi4Gn7TP8AiDxHSByNWSnvcZKpYkdMqEcxznTp0y0c8DD8Zx9OplyVDUAJJJTIAeQW5JPPU2iu86dOd7OhESZU5nTooSymYShns6ZhQQjQhWnToAlitLVezXHLadOhQGBYmoSSTqTvK1edOmAaDwxW1ZYxr4hrsBy1PpOnRXsaOhTXxYJtvGS1/JTUDzZ7k30y22nToYaZnsP+KM4PIDWT4mqlSw5CdOivQUZ5NfU854TYazp0mUGHBeJLSqEsMwK2221Bims+ZmIFgWJA6XO06dHbdCpZE/H00DSHDcKMTVWmvl8g9AyjzW7E3PuZ06UjpEpbZQ2ak5BNmpta46qdxDK/ES9NUZRdSTm5m86dMYK4Gq1S9IkgMtx0uOsW1RYkdCR9J06H0D2V7yBnToAkDLKqgAEbzp0YxH/FNOnTphT/2Q==",
                }}
              />
            </Box>
      
            <VStack px="$6" pt="$4" pb="$6">
              <Heading _dark={{ color: "$textLight200" }} size="sm">
                Mandi biasa
              </Heading>
              <Heading _dark={{ color: "$textLight200" }} size="xs">
                Rp. 30.000
              </Heading>
              <Text my="$1.5" _dark={{ color: "$textLight200" }} fontSize="$xs">
                Shampoo biasa, bersihkan telinga, potong kuku, parfum.
              </Text>
            </VStack>
          </Box>
          <Box
            maxWidth="$70"
            borderColor="$borderLight200"
            
            borderWidth="$1"
            my="$4"
            overflow="hidden"
            sx={{
              "@base": {
                mx: "$5",
              },
              _dark: {
                bg: "$backgroundDark900",
                borderColor: "$borderDark800",
              },
            }}
          >
            <Box>
              <Image
                
                h={150}
                width="100%"
                source={{
                  uri: "data:image/jpeg;base64,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",
                }}
              />
            </Box>
            <VStack px="$6" pt="$4" pb="$6">
              <Heading _dark={{ color: "$textLight200" }} size="sm">
                Mandi kutu
              </Heading>
              <Heading _dark={{ color: "$textLight200" }} size="xs">
                Rp. 50.000
              </Heading>
              <Text my="$1.5" _dark={{ color: "$textLight200" }} fontSize="$xs">
                Shampoo kutu, bersihkan telinga, pengecekan bulu, potong kuku, parfum.
              </Text>
            </VStack>
          </Box>
          <Box
            maxWidth="$70"
            borderColor="$borderLight200"
            
            borderWidth="$1"
            my="$4"
            overflow="hidden"
            sx={{
              "@base": {
                mx: "$5",
              },
              _dark: {
                bg: "$backgroundDark900",
                borderColor: "$borderDark800",
              },
            }}
          >
            <Box>
              <Image
                
                h={150}
                width="100%"
                source={{
                  uri: "https://apicms.mstar.com.my/uploads/images/2021/08/21/1263234.jpg",
                }}
              />
            </Box>
            <VStack px="$6" pt="$4" pb="$6">
              <Heading _dark={{ color: "$textLight200" }} size="sm">
                Mandi Lengkap
              </Heading>
              <Heading _dark={{ color: "$textLight200" }} size="xs">
                Rp. 60.000
              </Heading>
              <Text my="$1.5" _dark={{ color: "$textLight200" }} fontSize="$xs">
                Shampoo biasa/kutu, potong kuku, pengecekan kesehatan, parfum.
              </Text>
            </VStack>
          </Box>
        </Center>
      </ScrollView>
    </>
  );
};

export default Reservation;

// import { ScrollView, Box, VStack, Text, Image, Heading, TouchableOpacity } from "@gluestack-ui/themed";
// import { Header } from "../../components";
// import React from 'react';
// import { useNavigation } from "@react-navigation/native";

// const DetailGrooming = () => {
//   const navigation = useNavigation();

//   const handleBackPress = () => {
//     navigation.goBack();
//   };

//   return (
//     <>
//       <Header title={"Reservation"} />
//       <ScrollView flex={1} backgroundColor="floralwhite">
//         {/* isi konten */}
//         <TouchableOpacity onPress={handleBackPress}>
//         </TouchableOpacity>
//       </ScrollView>
//     </>
//   );
// };

// export default DetailGrooming;
